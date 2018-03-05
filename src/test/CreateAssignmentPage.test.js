import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CreateAssignmentPage from '../components/instructor/CreateAssignmentPage';

configure({ adapter: new Adapter() });

describe('<CreateAssignmentPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateAssignmentPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Navbar Html checker', () => {
    const editor = shallow(<CreateAssignmentPage />);
    const expectedOutput =
      '<ul class="ml-auto navbar-nav">' +
      '<li class="nav-item">' +
      '<a href="/instr_class" class="nav-link">Class</a>' +
      '<a href="/forum" class="nav-link">Forum</a>' +
      '<a href="/class_list" class="nav-link">Class List</a>' +
      '<a href="/create_assignment" class="nav-link">Create Assignment</a>' +
      '<a href="/grades" class="nav-link">Grades</a>' +
      '<a href="/" class="nav-link">Log Out</a>' +
      '</li>' +
      '</ul>';
    const realOutput = editor.find('Nav').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
