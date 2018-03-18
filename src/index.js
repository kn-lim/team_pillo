import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
import { Provider } from 'react-redux';

// Custom
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

// Mock AJAX
import { loadMembers } from './actions/memberActions';

//const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  // <App />,
  document.getElementById('root')
);
registerServiceWorker();
