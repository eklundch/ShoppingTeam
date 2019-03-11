'use strict';


const uuid = require('uuid');
const dynamodb = require('./dynamodb');

/*exports.c = function (){
  console.log("Fire!");
  
}*/
exports.create = (event,context,callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.firstname !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: {'Content-Type': 'text/plain'},
      body: 'Error!',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      items: data.items,
      order_status: data.order_status,
      //checked: false,
      //createdAt: timestamp,
      //updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t write to db.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};


