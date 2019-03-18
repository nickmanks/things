import React, {Fragment} from 'react';

const SecurityMeta = ()=> (
  <Fragment>
    <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
    <meta httpEquiv="X-XSS-Protection" content="1" />
  </Fragment>
);

export default SecurityMeta;
