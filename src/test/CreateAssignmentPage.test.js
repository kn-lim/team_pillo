import React from 'react';
import ReactDOM from 'react-dom';
import CreateAssignmentPage from '../components/instructor/CreateAssignmentPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateAssignmentPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
