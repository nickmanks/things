/* eslint-env node */
/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
'use strict';

const AWS = require('aws-sdk');
const HTTP_BAD_GATEWAY = 501;

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.delete = (event, context, callback)=> {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };

  // delete the todo from the database
  dynamoDb.delete(params, (error)=> {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || HTTP_BAD_GATEWAY,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Couldn\'t remove the todo item.'
      });

      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    };

    callback(null, response);
  });
};
