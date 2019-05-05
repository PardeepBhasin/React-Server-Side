import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return  `
    <html>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__PRELOADED_STATE__=${serialize(store.getState())}
          </script>
          <script src="../../public/client.bundle.js"></script>
        </body>
    </html>
  `;
}
