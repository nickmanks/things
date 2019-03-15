/* eslint-env node */
/* eslint no-console: 0 */
import {resolve} from 'path';
import webpackInitialiser from '@skan-io/webpack-config-base';
import storybook from '@storybook/core/dist/server/dev-server';
import {version, deployPath, deployUrl, nodeEnv} from './build/config';


export default ()=> {
  const buildEntries = ['index.html.js'];
  const buildOutputPath = 'build/pkg';
  const devServerPort = 8080;
  const faviconUrl = './src/favicon.png';
  const useSass = true;

  // Creates build entry points, output paths and plugin configs
  const webpackConfig = webpackInitialiser(
    buildEntries,
    buildOutputPath,
    devServerPort,
    faviconUrl,
    useSass
  );

  console.log(`
    Running webpack with config from './build/config.json':
    NODE_ENV=${nodeEnv}
    version=${version}
    app-url=${deployUrl}
  `);

  const config = webpackConfig(nodeEnv, deployUrl, deployPath, version);

  return {
    ...config,
    devServer: {
      ...config.devServer,
      historyApiFallback: {
        rewrites: [
          {from: /^\/$/, to: `/${deployPath}/`},
          {from: /^\/stories\/?$/, to: '/stories/index.html'}
        ]
      },
      before: async (app)=> {
        const configDir = resolve(__dirname, 'storybook');
        const router = await storybook({configDir});
        app.use(router);
      }
    }
  };
};
