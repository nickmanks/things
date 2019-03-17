

export const setError = (error)=> ({
  type: 'persistence/set-errors',
  error
});

export const setProcessing = (id)=> ({
  type: 'persistence/set-processing',
  id
});

export const setDone = (id)=> ({
  type: 'persistence/set-done',
  id
});
