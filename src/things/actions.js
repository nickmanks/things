

export const updateItem = (item)=> ({
  type: 'things/update-item',
  item
});

export const selectItem = (id)=> ({
  type: 'things/select-item',
  id
});
