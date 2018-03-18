import React from 'react';
import ReactDOM from 'react-dom';
import InstrClassListPage from '../components/instructor/InstrClassListPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <InstrClassListPage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
