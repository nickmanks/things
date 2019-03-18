import React from 'react';
import {Provider} from 'react-redux';
import {Module, Scripts, Styles} from 'react-entry-loader/injectors';
import SecurityMeta from './html/security';
import ViewportMeta from './html/viewport';
import SocialMeta from './html/social';
import VersionMeta from './html/version';
import render from './html/render';
import App from './app';
import {store} from './store';

import theme from './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';


const containerId = 'root';

/* eslint max-len: 0 */
/* eslint react/prop-types: off */

const Html = ({scripts, styles, version, appUrl})=> (
  <html>
    <head>
      <VersionMeta version={version} />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <SecurityMeta appUrl={appUrl} />

      <ViewportMeta />

      <SocialMeta
        title="Things - Get them done!"
        appUrl={appUrl}
        description="An awesome todo application"
      />
    </head>
    <body>
      <Styles files={styles} />

      <div id={containerId} className={theme.root}>
        <Module onLoad={(cmp)=> render(containerId)(cmp)}>
          <Provider store={store}>
            <App workaroundDependency={theme} />
          </Provider>
        </Module>
      </div>

      <iframe id="rp" style={{display: 'none'}} />

      <Scripts files={scripts} async />

    </body>
  </html>
);

export default Html;
