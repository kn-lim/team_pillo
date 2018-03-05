import React from 'react';
import ReactDOM from 'react-dom';
import StuHomePage from '../components/student/StuHomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StuHomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
