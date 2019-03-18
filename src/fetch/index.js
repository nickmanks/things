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
 * that reports request stats for the `category` given and
 * accepts a retry function.
 *
 * ```javascript
 * import {retryOnApiError} from './retry';
 *
 * const fetch = fetcher('save-things', retryOnApiError());
 *```
 */
export default (category, retry=()=> false)=> async (url, ...args)=> {
  let retries = 0;
  const retryForever = true;


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
