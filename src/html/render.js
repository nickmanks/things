import {render} from 'react-entry-loader/render';
import {document} from '../globals';


const addTouchWorkaround = ()=> {
  document.documentElement.addEventListener('touchstart', (event)=> {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, false);
};


const pageRenderer = (elemId)=> (cmp)=> {
  addTouchWorkaround();

  // TODO: scripts are loaded async, we need to wait for
  // element to be ready to render into
  render(elemId)(cmp);
};

export default pageRenderer;
