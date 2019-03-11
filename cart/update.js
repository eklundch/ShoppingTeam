'use strict';

const dynamodb = require('./dynamodb');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.firstname !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the cart item.',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#cart_firstname': 'firstname',
      '#cart_lastname':'lastname',
      '#cart_email':'email',
      '#cart_items': 'items',
      '#cart_order_status': 'order_status',
    },
    ExpressionAttributeValues: {
      ':firstname': data.firstname,
      ':lastname': data.lastname,
      ':email': data.email,
      ':items': data.items,
      ':order_status': data.order_status
    },
    UpdateExpression: 'SET #cart_firstname =:firstname, #cart_lastname = :lastname, #cart_email = :email, #cart_order_status = :order_status, #cart_items = :items', //'SET #cart_text = :text, checked = :checked, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the cart in the database
  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t update the cart item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
