import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Alert, Fade} from 'shards-react';
import {faExclamationCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {clearError} from '../persistence/actions';
import './theme.scss';


const CONNECTION_ERROR = 'Service unavailable. Please contact support.';


const ErrorNotification = ({message, removeError})=> (
  <Fade in={message !== null} className={'fade-in-error'}>
    <Alert theme="secondary">
      <FontAwesomeIcon
        className={'error-notification-icon-pre'}
        icon={faExclamationCircle}
      />
      {message}
      <FontAwesomeIcon
        icon={faTimes}
        className={'error-notification-icon-post'}
        onClick={()=> removeError()}
      />
    </Alert>
  </Fade>
);
ErrorNotification.propTypes = {
  message: PropTypes.string,
  removeError: PropTypes.func
};


const mapStateToProps = ({persistence})=> ({
  message: persistence.errors.length > 0 ? CONNECTION_ERROR : null
});

const mapDispatchToProps = (dispatch)=> ({
  removeError: ()=> {
    dispatch(clearError());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);
