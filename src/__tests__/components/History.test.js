import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/configureStore';
import BorrowHistory from '../../components/BorrowHistory';

describe('BorrowHistory component', () => {
  it('Renders user borrow history component', () => {
    const wrapper = shallow(<BorrowHistory store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
