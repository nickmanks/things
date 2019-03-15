import {render} from 'react-entry-loader/render';
import renderPage from './render';


// mockCallbacksMap will populate with callbacks as events get added
// then we can trigger them later to test things
const mockCallbacksMap = {};
const preventDefault = jest.fn();
const mockRenderFunc = jest.fn();

jest.mock('react-entry-loader/render', ()=> ({
  render: jest.fn(()=> mockRenderFunc)
}));

jest.mock('../store', ()=> ({
  store: 'test-store'
}));

jest.mock('../globals', ()=> ({
  document: {
    documentElement: {
      addEventListener: jest.fn((event, callback)=> {
        mockCallbacksMap[event] = callback;
      })
    },
    getElementById: jest.fn((elemId)=> ({
      id: elemId,
      style: {display: 'test'}
    }))
  },
  location: {hostname: 'nearmap.com'}
}));


describe('render', ()=> {

  it('renders app', ()=> {
    renderPage('test-container')('test-component');

    expect(render).toHaveBeenCalledWith('test-container');
    expect(mockRenderFunc).toHaveBeenCalledWith('test-component');
  });


  it('prevents the browsers default multitouch behaviour', ()=> {
    renderPage('test-container')('test-component');

    const event = {touches: ['touch1', 'touch2'], preventDefault};
    mockCallbacksMap.touchstart(event);

    expect(preventDefault).toHaveBeenCalled();
  });


  it('allows single touches to use default behaviour', ()=> {
    renderPage('test-container')('test-component');

    const event = {touches: ['touch1'], preventDefault};
    mockCallbacksMap.touchstart(event);

    expect(preventDefault).not.toHaveBeenCalled();
  });
});
