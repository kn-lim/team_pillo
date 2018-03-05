import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import CreateClassPage from '../components/instructor/CreateClassPage';

configure({ adapter: new Adapter() });

describe('<CreateClassPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateClassPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Navbar links to instructor page', () => {
    const editor = shallow(<CreateClassPage />);
    expect(editor.find('NavbarBrand').prop('href')).toEqual('/instructor');
  });
});
