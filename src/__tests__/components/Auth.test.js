import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/configureStore';
import Login from '../../components/Login';
import Register from '../../components/Register';
import RequestReset from '../../components/RequestReset';
import Resetpassword from '../../components/ResetPassword';
import sinon from 'sinon';

describe('Register component', () => {
  it('Renders register component', () => {
    const wrapper = shallow(<Register store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });

  xit('Handles _register onsubmit', () => {
    const _register = sinon.spy();
    const wrapper = shallow(<Register onSubmit={_register} store={store} />);
    wrapper.find('Form').simulate('submit');
  });
});

describe('Login component', () => {
  it('Renders login component', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });

  xit('Handles _login onsubmit', () => {
    const _login = sinon.spy();

    const wrapper = shallow(<Login onSubmit={_login} store={store} />);
    wrapper.find('.loginform').simulate('submit');
  });
});

describe('RequestReset  component', () => {
  it('Renders RequestReset component', () => {
    const wrapper = shallow(<RequestReset store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

describe('Resetpassword  component', () => {
  it('Renders Resetpassword component', () => {
    const param = {
      params: {
        token:
          'InNhbWthcmlzNzVAZ21haWwuY29tIg.DkH6cA.bW-ZL1O1KzI9i1S8Z0yBeei4s7w'
      }
    };
    const wrapper = shallow(
      <Resetpassword store={store} params={{ param }} />
    ).dive();
    expect(wrapper).toHaveLength(1);
  });
});
