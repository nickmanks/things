import {
  SORT_NEWEST,
  SORT_OLDEST,
  SORT_STATUS,
  SORT_DUE,
  SORT_ARCHIVED
} from '../app-bar/sort';


// eslint-disable-next-line max-statements, complexity
export const scoreItems = (searchTerm)=> (item)=> {
  if (!searchTerm) {
    return {item, score: 1};
  }

  const search = searchTerm.toLowerCase();

  if (item.name && item.name.toLowerCase().includes(search)) {
    return {item, score: 10};
  }
  if (item.category && item.category.toLowerCase().includes(search)) {
    return {item, score: 5};
  }
  if (item.status && item.status.toLowerCase().includes(search)) {
    return {item, score: 5};
  }
  if (item.description && item.description.toLowerCase().includes(search)) {
    return {item, score: 1};
  }

  return {item, score: -1};
};

// eslint-disable-next-line max-statements
export const sortItems = (sortType)=> {
  if (sortType === SORT_NEWEST) {
    return (a, b)=> b.item.created - a.item.created;
  }

  if (sortType === SORT_OLDEST) {
    return (a, b)=> a.item.created - b.item.created;
  }

  if (sortType === SORT_STATUS) {
    return (a, b)=> {
      if (a.item.status === 'done') {
        return -1;
      }
      if (b.item.status === 'done') {
        return 1;
      }

      return -1;
    };
  }

  if (sortType === SORT_DUE) {
    return (a, b)=> {
      if (a.item.due === null) {
        return 1;
      }
      if (b.item.due === null) {
        return -1;
      }
      return a.item.due - b.item.due;
    };
  }

  if (sortType === SORT_ARCHIVED) {
    return (a, b)=> a.item.archivedDate - b.item.archivedDate;
  }

  return (a, b)=> b.score - a.score;
};
