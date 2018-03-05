import React from 'react';
import ReactDOM from 'react-dom';
import AddClassPage from '../components/student/AddClassPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddClassPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
