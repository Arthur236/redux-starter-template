import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
