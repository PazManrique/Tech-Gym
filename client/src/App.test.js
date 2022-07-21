<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe ('test de home',()=>{
  beforeEach(()=>{
    render(<App />);
  })

  test('render "Yoga" title', () => {  
    const title = screen.getByText(/yoga/i)

    expect(title).toBeInTheDocument();
  });

})
>>>>>>> main
