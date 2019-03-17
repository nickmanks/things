import fetcher from '../fetch';
import {getFetchOptions} from '../fetch/utils';
import {getUpdateItemEndpoint, getListItemsEndpoint} from '../config';

const fetch = fetcher('todo-service');


export const service = ({
  // eslint-disable-next-line
  updateItem: async (update, setProcessed)=> {
    if (!update) {
      setProcessed(null);
      return;
    }

    const {item} = update;
    const json = JSON.stringify(item);

    try {
      await fetch(
        getUpdateItemEndpoint(),
        getFetchOptions('POST', json)
      );
    } catch (error) {
      setProcessed({error});
      return;
    }

    setProcessed({error: null});
    return;
  },

  loadItems: async (setLoaded)=> {
    const response = await fetch(
      getListItemsEndpoint(),
      getFetchOptions('GET')
    );
    const items = await response.json();
    setLoaded(items);
  }
});
