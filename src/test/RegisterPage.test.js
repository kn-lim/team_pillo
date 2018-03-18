import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from '../components/new_user/RegisterPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
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
        <RegisterPage />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
