import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    
  test('renders Header correctly', () => {
    const output = render(
        <Header/>
    );
    expect(output).toMatchSnapshot();
  });

});
