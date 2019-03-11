'use strict';
var content;
const dynamodb = require('./dynamodb');

module.exports.invoice = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  // fetch todo from the database
  dynamodb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the shopping cart content.',
      });
      return;
      }
      if (result.Item.order_status == "complete")
        {
            content = JSON.stringify(result.Item)
        }
      else
        {
            content = "Order incomplete!"
        }
          

    // create a response
    const response = {
      statusCode: 200,
      body: content,
    };
    callback(null, response);
  });
};
