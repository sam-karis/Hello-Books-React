import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/configureStore';
import AddBook from '../../components/AddBook';
import EditBook from '../../components/EditBook';

describe('AddBook component', () => {
  it('Renders add book component', () => {
    const wrapper = shallow(<AddBook store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

describe('EditBook component', () => {
  const param = {
    params: {
      id: 1
    }
  };
  it('Renders edit book component', () => {
    const wrapper = shallow(
      <EditBook params={{ param }} store={store} />
    );
    expect(wrapper).toHaveLength(1);
  });
});
