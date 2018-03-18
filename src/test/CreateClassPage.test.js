import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CreateClassPage from '../components/instructor/CreateClassPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<CreateClassPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <CreateClassPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
