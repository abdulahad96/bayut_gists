import React from 'react';
import { render } from '@testing-library/react';
import DateInfoContainer from '../components/DateInfoContainer';

describe('DateInfoContainer', () => {
   const  created_at= "2023-06-25T09:51:54Z";
   const updated_at="2023-06-25T09:51:54Z";
  test('renders DateInfoContainer correctly', () => {
    const output = render(
        <DateInfoContainer
        created_at={created_at}
       updated_at={updated_at}
       />
    );
    expect(output).toMatchSnapshot();
  });

});
