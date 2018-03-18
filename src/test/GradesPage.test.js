import React from 'react';
import ReactDOM from 'react-dom';
import GradesPage from '../components/common/GradesPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <GradesPage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
