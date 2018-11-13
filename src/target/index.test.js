import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from '.';

const sum = (a, b) => a + b;

describe('Main Feature', () => {
   it('toggle', () => {
      expect(sum(2, 3)).toBe(5);
   });
   it('renders Good', () => {
      const component = renderer.create(<MyComponent />);
      expect(component.toJSON).toMatchSnapshot();
   });
});
