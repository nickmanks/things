import {sleep} from '../utils/async';
import {HTTP_BAD_GATEWAY, HTTP_SERVICE_UNAVAILABLE} from './http-codes';
import {HTTP_GATEWAY_TIMEOUT} from './http-codes';


// Maximum number of times we retry fetch
const defaultMaxRetries = 5;
const baseDelayTime = 1000;

// Backoff settings

/*
 * We retry fetch when these errors happen
 * 502 Bad Gateway - https://tools.ietf.org/html/rfc7231
 * 503 Service Unavailable - https://tools.ietf.org/html/rfc7231
 * 504 Gateway Timeout - https://tools.ietf.org/html/rfc7231
*/
export const serverErrors = new Set([
  HTTP_BAD_GATEWAY,
  HTTP_SERVICE_UNAVAILABLE,
  HTTP_GATEWAY_TIMEOUT
]);


export const retryOnApiError = (
    errors=serverErrors, maxRetries=defaultMaxRetries
)=> async (resp, retries)=> {
  const maxRetriesReached = (retries === maxRetries);
  const hasRetryableError = resp && errors.has(resp.status);
  const delay = 2 * retries * baseDelayTime;

  // Handle any status not defined on serverErrors
  if (maxRetriesReached || !hasRetryableError) {
    return false;
  }

  // Handle server errors
  await sleep(delay);

  return true;
};
