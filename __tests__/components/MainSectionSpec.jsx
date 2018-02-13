import React from 'react';
import { shallow } from 'enzyme';
import MainSection from '../../src/components/MainSection';

describe('Main Section', () => {
  it('should display Hello World text', () => {
    const wrapper = shallow(<MainSection
      myVariables={{ myVar: 'Hello' }}
      actions={{ updateMyVar: jest.fn() }}
    />);

    expect(wrapper.contains('Hello')).toBe(true);
  });
});
