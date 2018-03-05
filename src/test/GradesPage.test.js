import React from 'react';
import ReactDOM from 'react-dom';
import GradesPage from '../components/common/GradesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GradesPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
