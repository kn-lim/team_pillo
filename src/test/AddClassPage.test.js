import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import AddClassPage from '../components/student/AddClassPage';
import Adapter from 'enzyme-adapter-react-15';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'; // 4.0.0

configure({ adapter: new Adapter() });

describe('<AddClassPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <AddClassPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Html div counter check', () => {
    const editor = shallow(<AddClassPage />);
    expect(editor.find('div').length).toEqual(1);
  });
});
