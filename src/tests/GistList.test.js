import React from 'react';
import { render } from '@testing-library/react';
import GistList from '../screens/GistList';
import MockProvider from './mockProvide';

describe('GistList', () => {


  test('renders correctly', () => {
    const output = render(
        <MockProvider>

            <GistList />
        </MockProvider>
    );
    expect(output).toMatchSnapshot();
  });

});
