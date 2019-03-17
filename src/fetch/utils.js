

export const getFetchOptions = (
    method, body, token, type = 'application/json'
)=> ({
  method,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    'Content-Type': type
  },
  body
});
