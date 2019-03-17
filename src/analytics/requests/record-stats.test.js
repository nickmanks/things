import {getStats, clearStats} from './record-stats';
import {addResponseStats} from './record-stats';


describe('Recording service/app response times', ()=> {
  beforeEach(()=> {
    clearStats();
  });

  it('groups a request response time into a known group', ()=> {
    const responseTime = 41;
    const retryCount = 0;
    const url = '//example.org/service/test';

    addResponseStats('test-group', url, responseTime, retryCount);

    expect(getStats()).toEqual({
      'test-group': [{responseTime, retryCount}]
    });
  });

  it('clears response times for a request', ()=> {
    const responseTime = 41;
    const url = '//example.org/service/test';

    addResponseStats('test-group', url, responseTime);
    clearStats();

    expect(getStats()).toEqual({});
  });
});

describe('Recording service/app number of load retries', ()=> {
  beforeEach(()=> {
    clearStats();
  });

  it('logs retry count', ()=> {
    const responseTime = 41;
    const url = '//example.org/service/test';
    const retryCount = 7;

    addResponseStats('test-group-retries', url, responseTime, retryCount);

    expect(getStats()).toEqual({
      'test-group-retries': [{responseTime, retryCount}]
    });
  });
});
