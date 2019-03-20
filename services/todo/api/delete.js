/* eslint-env node */
/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
'use strict';

const AWS = require('aws-sdk');
const HTTP_BAD_GATEWAY = 501;
const HTTP_BAD_SCHEMA = 422;
const HTTP_BAD_DATA = 400;
const HTTP_NOT_FOUND = 404;

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.delete = (event, context, callback)=> {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    }
  };

  if (!event.pathParameters.id) {
    callback(null, {
      statusCode: HTTP_NOT_FOUND,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      },
      body: 'ID path parameter not found'
    });
    return;
  }

  dynamoDb.delete(params, (error)=> {
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
