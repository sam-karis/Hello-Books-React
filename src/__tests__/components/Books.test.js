import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { store } from '../../store/configureStore';
import Books from '../../components/Books';
import Book from '../../components/Book';
import SingleBook from '../../components/SingleBook';

describe('Books component', () => {
  it('Renders all book component', () => {
    const wrapper = shallow(<Books store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Book component', () => {
  it('Renders book component', () => {
    const wrapper = shallow(<Book store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('SingleBook component', () => {
  const param = {
    params: {
      id: 1
    }
  };
  it('Renders SingleBook component', () => {
    const wrapper = shallow(<SingleBook params={{ param }} store={store} />);
    expect(wrapper).toHaveLength(1);
  });

  xit('Handles _deleteBook onsubmit', () => {
    const _deleteBook = sinon.spy();

    const wrapper = shallow(<SingleBook onClick={_deleteBook} store={store} />);
    wrapper.find('.admin').simulate('onClick');
  });
});
