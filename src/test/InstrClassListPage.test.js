import React from 'react';
import ReactDOM from 'react-dom';
import InstrClassListPage from '../components/instructor/InstrClassListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstrClassListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
