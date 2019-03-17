

export const updateItem = (item)=> ({
  type: 'things/update-item',
  item
});

export const setItem = (item)=> ({
  type: 'things/set-item',
  item
});

export const selectItem = (id)=> ({
  type: 'things/select-item',
  id
});

export const setSearchValue = (value)=> ({
  type: 'things/set-search-value',
  value
});

export const setSortType = (sortType)=> ({
  type: 'things/set-sort-type',
  sortType
});

export const setSortOpen = (open)=> ({
  type: 'things/set-sort-open',
  open
});
