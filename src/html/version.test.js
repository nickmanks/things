import React from 'react';
import VersionMeta from './version';


describe('<VersionMeta /> regression', ()=> {
  it('renders tags', ()=> {
    expect(
      <VersionMeta version="test-version" />
    ).toMatchElem(
      <meta name="x-app-version" content="test-version" />
    );
  });
});
