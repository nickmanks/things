import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const SecurityMeta = ()=> (
  <Fragment>
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-XSS-Protection" content="1" />
  </Fragment>
);

SecurityMeta.propTypes = {
  appUrl: PropTypes.string
};

export default SecurityMeta;
