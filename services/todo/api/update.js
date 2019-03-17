/* eslint-env node */
/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
'use strict';


const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const HTTP_BAD_GATEWAY = 501;


module.exports.update = (event, context, callback)=> {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // May need to do data validation

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: data.id,
      created: data.created,
      name: data.name,
      description: data.description,
      archived: data.archived,
      archivedDate: data.archivedDate,
      due: data.due,
      status: data.status,
      category: data.category,
      updatedAt: timestamp
    }
  };

  // write the todo to the database
  dynamoDb.put(params, (error)=> {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || HTTP_BAD_GATEWAY,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
        body: 'Couldn\'t create the todo item.'
      });

      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
      }
    };

    callback(null, response);
  });
};
