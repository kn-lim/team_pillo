import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ForumPage from '../components/common/ForumPage';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<ForumPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ForumPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('Test post visibility update on click', () => {
  //   const editor = mount(<Router><ForumPage /></Router>);
  //   const link = editor.find('ListGroupItem').at(0);
  //   link.simulate('click');
  //   expect(editor.state().post1).toEqual(true);
  // });
});
