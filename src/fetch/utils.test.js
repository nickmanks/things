import {getFetchOptions} from './utils';


describe('Creating Fetch Options', ()=> {
  it('creates options with a method and default type', ()=> {
    expect(getFetchOptions('PUT')).toEqual({
      method: 'PUT',
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json'
      },
      body: undefined
    });
  });

  it('creates options with a body', ()=> {
    expect(getFetchOptions('PUT', 'test-body')).toEqual({
      method: 'PUT',
      headers: {
        Authorization: undefined,
        'Content-Type': 'application/json'
      },
      body: 'test-body'
    });
  });

  it('creates options with an access token', ()=> {
    expect(getFetchOptions('PUT', undefined, 'test-token')).toEqual({
      method: 'PUT',
      headers: {
        Authorization: 'Bearer test-token',
        'Content-Type': 'application/json'
      },
      body: undefined
    });
  });

  it('creates options with a custom type', ()=> {
    expect(getFetchOptions('PUT', undefined, undefined, 'img/blob')).toEqual({
      method: 'PUT',
      headers: {
        Authorization: undefined,
        'Content-Type': 'img/blob'
      },
      body: undefined
    });
  });
});
