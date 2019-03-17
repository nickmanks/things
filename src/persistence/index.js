import {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {service} from './service';
import {setError, setDone, setProcessing} from './actions';
import {setItem} from '../things/actions';


const PersistenceManager = ({
  queued, processing, onError, onProcessed, onNext, onLoad
})=> {
  const [processed, setProcessed] = useState(null);
  const [loaded, setLoaded] = useState(null);

  // Use once one mount
  useMemo(()=> {
    service.loadItems(setLoaded);
  }, []);

  useEffect(()=> {
    if (loaded) {
      onLoad(loaded);
    }
  }, [loaded]);

  useEffect(()=> {
    if (processing.length === 0 && queued[0]) {
      onNext(queued[0]);
    }
  }, [queued]);

  // When the processing array changes signal to start updating those items
  useEffect(()=> {
    service.updateItem(processing[0], setProcessed);
  }, [processing]);

  // When the processingPromise changes are no longe waiting on updates
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
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(PersistenceManager);
