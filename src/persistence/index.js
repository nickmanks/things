import {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {service} from './service';
import {setError, setDone, setProcessing, setLoaded} from './actions';
import {setItem} from '../things/actions';


const PersistenceManager = ({
  queued, processing, onError, onProcessed, onNext, onLoad
})=> {
  const [processed, setProcessed] = useState(null);
  const [loadedItems, setLoadedItems] = useState(null);

  // Once on mount load the persisted items
  useMemo(()=> {
    service.loadItems(setLoadedItems);
  }, []);

  // After loaded items have been registered add them to store
  useEffect(()=> {
    if (loadedItems) {
      onLoad(loadedItems);
    }
  }, [loadedItems]);

  // If there is nothing processing and something in the queue
  // dispatch it for processing
  useEffect(()=> {
    if (processing.length === 0 && queued[0]) {
      onNext(queued[0]);
    }
  }, [queued]);

  // Attempt to process the new items
  useEffect(()=> {
    const processessableItem = processing[0];

    if (processessableItem) {
      const {type} = processessableItem;

      if (type === 'update') {
        service.updateItem(processing[0], setProcessed);
      }
      if (type === 'delete') {
        service.deleteItem(processing[0], setProcessed);
      }
    }
  }, [processing]);

  // Once processed moved to done and process a new item from the queue
  useEffect(()=> {
    if (processed) {
      const {error} = processed;

      if (error) {
        onError(error);
      } else {
        onProcessed(processing[0]);

        if (queued[0]) {
          onNext(queued[0]);
        }
      }
    }
  }, [processed]);

  return null;
};
PersistenceManager.propTypes = {
  queued: PropTypes.array,
  processing: PropTypes.array,
  onError: PropTypes.func,
  onProcessed: PropTypes.func,
  onNext: PropTypes.func,
  onLoad: PropTypes.func
};


const mapStateToProps = ({persistence})=> ({
  queued: persistence.queued,
  processing: persistence.processing
});

const mapDispatchToProps = (dispatch)=> ({
  onError: (error)=> {
    dispatch(setError(error));
  },
  onProcessed: (update)=> {
    dispatch(setDone(update.id));
  },
  onNext: (update)=> {
    dispatch(setProcessing(update.id));
  },
  onLoad: (items)=> {
    for (const item of items) {
      dispatch(setItem(item));
    }

    dispatch(setLoaded());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(PersistenceManager);
