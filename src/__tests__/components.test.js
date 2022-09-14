import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Nav';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';

describe('Header renders correctly', () => {
  test('Renders Header Correctly', () => {
    const header = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(header).toMatchSnapshot();
  });
});

describe('Home renders correctly', () => {
  test('Renders Header Correctly', () => {
    const home = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });
});

describe('Quote renders correctly', () => {
  test('Renders Header Correctly', () => {
    const quote = render(
      <Router>
        <Quote />
      </Router>,
    );
    expect(quote).toMatchSnapshot();
  });
});

describe('Calculator renders correctly', () => {
  test('Renders Calculator Correctly', () => {
    const calc = render(
      <Router>
        <Calculator />
      </Router>,
    );
    expect(calc).toMatchSnapshot();
  });
});

