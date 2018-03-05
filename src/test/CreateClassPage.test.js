import React from 'react';
import ReactDOM from 'react-dom';
import CreateClassPage from '../components/instructor/CreateClassPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateClassPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
