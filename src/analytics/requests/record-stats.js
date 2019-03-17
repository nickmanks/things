let stats = {};

export const addResponseStats = (
    group, url, responseTime, retryCount
)=> {

  stats[group] = stats[group] || [];
  stats[group].push({responseTime, retryCount});
};

export const clearStats = ()=> {
  stats = {};
};

export const getStats = ()=> (stats);
