import React from 'react';
import ReactDOM from 'react-dom';
import GroupPage from '../components/common/GroupPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroupPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
