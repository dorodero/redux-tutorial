import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import { store } from './modules';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root'),
);
