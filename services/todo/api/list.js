/* eslint-env node */
/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
'use strict';


const AWS = require('aws-sdk');
const HTTP_BAD_GATEWAY = 501;

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE
};


module.exports.list = (event, context, callback)=> {
  // fetch all todos from the database
  dynamoDb.scan(params, (error, result)=> {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || HTTP_BAD_GATEWAY,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Couldn\'t fetch the todos.'
      });
      
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
      }
    };
    callback(null, response);
  });
};
