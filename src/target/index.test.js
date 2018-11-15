import React from 'react';
import renderer from 'react-test-renderer';
import GncComponent from '.';

describe('Main Feature', () => {
   it('renders Good', () => {
      const component = renderer.create(<GncComponent />);
      expect(component.toJSON).toMatchSnapshot();
   });
});
