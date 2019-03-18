

export const setError = (error)=> ({
  type: 'persistence/set-error',
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

export const setLoaded = ()=> ({
  type: 'persistence/set-loaded'
});

export const clearError = ()=> ({
  type: 'persistence/clear-error'
});
