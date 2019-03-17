import {fetch} from '../globals';
import {now} from '../utils/dates';
import {defer} from '../utils/async';
import {addResponseStats} from '../analytics/requests/record-stats';


const fetchWithStats = async (category, retries, url, ...args)=> {
  const sendTime = now().getTime();

  try {
    return await fetch(url, ...args);
  } finally {
    const receiveTime = now().getTime();
    const responseTimeMs = receiveTime - sendTime;

    defer(()=> addResponseStats(category, url, responseTimeMs, retries));
  }
};

/**
 * Create a fetch-API compatible `fetch` function
 * that reports request stats for the `category` given.
 *
 * e.g.,
 * ```javascript
 * import fetcher from '../fetch';
 *
 * const fetchPhotoInfo = fetcher('photo-info');
 * ...
 *
 * const foo = async ()=> {
 *   ...
 *   const resp = await fetchPhotoInfo(url);
 *   ...
 * };
 *```
 *
 * For retries, you can pass a retry function
 * which determines the following:
 *
 * 1. Whether we should retry fetching or not
 * 2. The delay
 * 3. How it will handle specific response errors like 429
 *    rate limiting status code
 *
 * To specify when to retry again every time a failure happens
 *
 * e.g.,
 *
 * ```javascript
 * import {retryOnApiError} from './retry';
 *
 * const fetch = fetcher('save-projects', retryOnApiError());
 *```
 *
 * To handle errors differently, consider adding reusable functions on retry.js
 *
 */
export default (category, retry=()=> false)=> async (url, ...args)=> {
  let retries = 0;
  const retryForever = true;

  // A tradeoff in this design decision
  // The retry function could keep returning false
  // Please ensure the retry function does return true at some point
  // eslint-disable-next-line no-unmodified-loop-condition
  while (retryForever) {
    const res = await fetchWithStats(category, retries, url, ...args);
    const shouldRetryFetch = await retry(res, retries);

    if (shouldRetryFetch) {
      retries += 1;
    } else {
      return res;
    }
  }
};
