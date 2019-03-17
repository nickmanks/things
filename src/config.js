
/*
  See services/todo/serverless.yml and associated handler functions
  for REST API details
 */

// POST
export const getUpdateItemEndpoint = ()=> `https://ggrld3wnmh.execute-api.us-east-1.amazonaws.com/dev/todos`;

// GET
export const getListItemsEndpoint = ()=> `https://ggrld3wnmh.execute-api.us-east-1.amazonaws.com/dev/todos`;

// DELETE
export const getDeleteItemEndpoint = (id)=> `https://ggrld3wnmh.execute-api.us-east-1.amazonaws.com/dev/todos/${id}`;
