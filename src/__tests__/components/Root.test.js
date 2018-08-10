import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/configureStore';
import Root from '../../components/Root';
import Header from '../../components/Navigation';
import Footer from '../../components/Footer';

describe('Root component', () => {
  it('Renders root component', () => {
    const wrapper = shallow(<Root store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Header component', () => {
  it('Renders header component', () => {
    const wrapper = shallow(<Header store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Footer component', () => {
  it('Renders footer component', () => {
    const wrapper = shallow(<Footer store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
