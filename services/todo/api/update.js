/* eslint-env node */
/* eslint no-console: 0 */
/* eslint no-process-env: 0 */
'use strict';


const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const HTTP_BAD_GATEWAY = 501;
const HTTP_BAD_SCHEMA = 422;
const HTTP_BAD_DATA = 400;
const DESCRIPTION_LENGTH = 500;


const requiredFields = [
  'id', 'created', 'name', 'description',
  'archived', 'archivedDate', 'due', 'status', 'category'
];

const isDefined = (obj, field)=> obj && obj[field] !== undefined;

const nullifyEmptyStrings = (data, fields)=> {
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    if (data[field] === '') {
      data[field] = null;
    }
  }

  return data;
};

const validateData = (data, callback)=> {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const field = requiredFields[i];

    if (!isDefined(data, field)) {
      callback(null, {
        statusCode: HTTP_BAD_SCHEMA,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
        body:
          `Couldn't create the todo (schema expected ${field} to be defined)`
      });
      return;
    }
  }

  if (data.description && data.description.length > DESCRIPTION_LENGTH) {
    callback(null, {
      statusCode: HTTP_BAD_DATA,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      },
      body:
        `Couldn't create the todo (description length > 500)`
    });
    return;
  }

  return nullifyEmptyStrings(data, ['name', 'category', 'description']);
};


module.exports.update = (event, context, callback)=> {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const validData = validateData(data, callback);

  if (!validData) {
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: validData.id,
      created: validData.created,
      name: validData.name,
      description: validData.description,
      archived: validData.archived,
      archivedDate: validData.archivedDate,
      due: validData.due,
      status: validData.status,
      category: validData.category,
      updatedAt: timestamp
    }
  };

  dynamoDb.put(params, (error)=> {
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
