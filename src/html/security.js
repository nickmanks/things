import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {lineBreaksToSpaces} from '../utils/strings';


const SecurityMeta = ()=> (
  <Fragment>
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-XSS-Protection" content="1" />
    <meta
      httpEquiv="Content-Security-Policy"
      content={lineBreaksToSpaces`
        default-src
         'self'
          ws:
          *.execute-api.us-east-1.amazonaws.com;

        script-src
          'self'
          'unsafe-inline';

        img-src
          'self'
          blob:
          data:
          *.execute-api.us-east-1.amazonaws.com;

        style-src 'self' 'unsafe-inline' fonts.googleapis.com;

        font-src 'self' fonts.gstatic.com;
      `}
    />
  </Fragment>
);

SecurityMeta.propTypes = {
  appUrl: PropTypes.string
};

export default SecurityMeta;
