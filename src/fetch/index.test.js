import {fetch} from '../globals';
import {addResponseStats} from '../analytics/requests/record-stats';
import {clearResponseTimes} from '../analytics/requests/record-stats';
import {sleep} from '../utils/async';
import {now} from '../utils/dates';
import {retryOnApiError} from './retry';
import fetcher from '../fetch';


const wrappedFetch = fetcher('test-group');


jest.mock('../globals', ()=> ({
  window: {},
  location: {hostname: 'localhost'},
  fetch: jest.fn()
}));

jest.mock('../analytics/requests/record-stats', ()=> ({
  addResponseStats: jest.fn(),
  clearResponseTimes: jest.fn()
}));

jest.mock('../utils/dates', ()=> ({
  now: jest.fn(()=> ({getTime: ()=> 1000}))
}));

jest.mock('../utils/async', ()=> ({
  sleep: jest.fn(()=> null),
  defer: require.requireActual('../utils/async').defer
}));


beforeEach(()=> {
  clearResponseTimes();
});


describe('Fetch calls', ()=> {
  const url = '//example.test-url.org/test';

  it('calls fetch when a service request has been made', async ()=> {
    fetch.mockImplementation(async ()=> ({
      json: async ()=> ({})
    }));


    await wrappedFetch(url);

    expect(sleep).not.toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('adds a response stat when a request has been made', async ()=> {
    fetch.mockImplementation(async ()=> ({
      json: async ()=> ({})
    }));

    const sendTime = 100;

    // sendTime
    now.mockImplementationOnce(jest.fn(()=> ({getTime: ()=> sendTime})));

    await wrappedFetch(url);

    expect(sleep).not.toHaveBeenCalled();
    expect(now).toHaveBeenCalled();
    expect(addResponseStats).toHaveBeenCalledWith('test-group', url, 900, 0);
  });
});


describe('Retrying fetches', ()=> {
  const url = 'https://apps-api.nearmap.com/maps/ae5bb585';
  let fetchReq = null;


  beforeEach(()=> {
    const retry = retryOnApiError();
    fetchReq = fetcher('test-projects', retry);
  });


  it('returns response if status is within the range 200-299', async ()=> {
    fetch.mockImplementation(async ()=> ({
      json: ()=> ({foo: 'bar'}),
      status: 201
    }));

    fetchReq = fetcher('test-projects');
    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).not.toHaveBeenCalled();
    expect(response.json()).toEqual({foo: 'bar'});
  });

  it('returns response if the response status is 401', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 401
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).not.toHaveBeenCalled();
    expect(response.status).toEqual(401);
  });

  it('returns response if the response status is 403', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 403
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).not.toHaveBeenCalled();

    expect(response.status).toEqual(403);
  });

  it('returns response if the response status is 404', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 404
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).not.toHaveBeenCalled();

    expect(response.status).toEqual(404);
  });

  it('retries fetch if the response status is 502', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 502
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).toHaveBeenCalledTimes(5);
    expect(sleep).toHaveBeenCalledWith(2000);
    expect(sleep).toHaveBeenCalledWith(8000);

    await expect(response.status).toEqual(502);
  });

  it('retries fetch if the response status is 503', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 503
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).toHaveBeenCalledTimes(5);
    expect(sleep).toHaveBeenCalledWith(2000);
    expect(sleep).toHaveBeenCalledWith(8000);

    await expect(response.status).toEqual(503);
  });

  it('retries fetch if the response status is 504', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 504
    }));

    const req = await fetchReq(url);
    const response = await req;

    jest.runAllTimers();

    expect(sleep).toHaveBeenCalledTimes(5);
    expect(sleep).toHaveBeenCalledWith(2000);
    expect(sleep).toHaveBeenCalledWith(8000);

    await expect(response.status).toEqual(504);
  });
});


describe('Gathering and logging fetch retry statistics', ()=> {
  const url = 'https://apps.testing.com/todo/123122';
  let fetchReq = null;


  beforeEach(()=> {
    const retry = retryOnApiError();
    fetchReq = fetcher('test-projects', retry);
  });


  it('logs response stats when a response is available', async ()=> {
    fetch.mockImplementation(async ()=> ({
      status: 504
    }));
    const sendTime = 100;

    // sendTime
    now.mockImplementationOnce(jest.fn(()=> ({getTime: ()=> sendTime})));

    const req = await fetchReq(url);
    expect(now).toHaveBeenCalledTimes(12);

    const response = await req;

    jest.runAllTimers();

    expect(response.status).toEqual(504);

    expect(addResponseStats).toHaveBeenCalledWith('test-projects', url, 0, 3);
    expect(addResponseStats).toHaveBeenCalledWith('test-projects', url, 0, 4);
  });
});
