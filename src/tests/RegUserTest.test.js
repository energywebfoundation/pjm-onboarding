// TODO: update of tests for recently changed user registration form
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegUserContainer from '../containers/UserMgmt/RegUserContainer';
import { Provider } from 'react-redux'
import Store from '../Store/Store'
import renderer from 'react-test-renderer';



Enzyme.configure({ adapter: new Adapter() });
//const wrapper =renderer.create(<Provider store={Store}><RegUserContainer /></Provider>);

describe('RegUserContainer Snapshort Test', () => {
  it('Correctly Render Reg User', () => {
    const InputComponent = renderer.create(<Provider store={Store}><RegUserContainer /></Provider>).toJSON();
    expect(InputComponent).toMatchSnapshot();
  });
});

describe('No validation class applied in empty form', () => {
  test('Validation class', () => {
    const wrapper = mount(<Provider store={Store}><RegUserContainer /></Provider>);
    //console.log(wrapper.debug())

    expect(wrapper.find(".is-invalid").length).toEqual(0);
  });

});

describe('User Submit form without any value and validation applied without onblur calls', () => {
  const wrapperi = mount(<Provider store={Store}><RegUserContainer /></Provider>);

  it('Test click event', () => {

    wrapperi.find('#formbutton').simulate('click');
    expect(wrapperi.find(".is-invalid").length).not.toEqual(0);
  });
});

describe('field (email) test', () => {
  const wrapperi = mount(<Provider store={Store}><RegUserContainer /></Provider>);
  const field = '#emailtxt';

  it('Test Null value', () => {
    wrapperi.find(field).simulate('focus');
    wrapperi.find(field).simulate('blur');
    expect(wrapperi.find(".is-invalid").length).toEqual(1);
  });


  it('Test Valid value', () => {
    /*wrapperi.find(field).simulate('change', {
      target: { value: 'abc@def.com' }
    });*/
    const event = { target: { name: "email", value: "abc@def.com" } };
    wrapperi.find(field).simulate('blur', event);

    expect(wrapperi.find(".is-invalid").length).toEqual(0);
  });

  it('Test Invalid value', () => {
    const event = { target: { name: "email", value: "spam" } };
    wrapperi.find(field).simulate('blur', event);

    expect(wrapperi.find(".is-invalid").length).toEqual(1);
  });


});

