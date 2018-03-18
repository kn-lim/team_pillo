import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../components/new_user/LoginPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
import { Username } from '../components/common/Username';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const state = state => ({
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state })
  });
  const store = state({});
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <LoginPage />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
