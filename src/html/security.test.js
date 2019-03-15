import React, {Fragment} from 'react';
import SecurityMeta from './security';


describe('<SecurityMeta /> regression', ()=> {
  it('renders tags', ()=> {
    expect(
      <SecurityMeta />
    ).toMatchElem(
      <Fragment>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1" />
      </Fragment>
    );
  });
});
