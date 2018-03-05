import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import StuHomePage from '../components/student/StuHomePage';

configure({ adapter: new Adapter() });

describe('<StuHomePage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StuHomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Counts number of checklist items', () => {
    const editor = shallow(<StuHomePage />);
    const list = editor
      .find('CheckboxList')
      .at(0)
      .prop('list');
    expect(list.length).toEqual(3);
  });

  // it('Test adding to checklist', () => {
  //   const editor = mount(<StuHomePage />);
  //   const input = editor.find('input').at(0);
  //   const button = editor.find('Button').at(0);
  //   input.simulate('change', { target: { a: 'making item' } });
  //   input.ref().value = "hello";
  //   console.log(editor.debug())
  //   console.log(button)
  //   button.props().onClick();
  //
  //   const list = editor.find('CheckboxList').at(0).prop("list");
  //   expect(list.text).toEqual('making item');
  //   expect(list.length).toEqual(4);
  //
  // });
});
