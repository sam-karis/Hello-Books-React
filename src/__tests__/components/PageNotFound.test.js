import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/configureStore';
import PageNotFound from '../../components/PageNotFound';

describe('Page not found component', () => {
  it('Renders 404 error component', () => {
    const wrapper = shallow(<PageNotFound store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

