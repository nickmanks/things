
export default ({dispatch})=> (next)=> (action)=> {
  if (typeof action.then === 'function') {
    return action.then((resultAction)=> {
      if (resultAction !== undefined) {
        dispatch(resultAction);
      }
    });
  }

  return next(action);
};
