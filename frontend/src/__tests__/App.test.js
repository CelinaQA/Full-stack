import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

describe(`snapshot test of app`, () => {

  it(`should match the snapshot every time it is rendered`, () => {
    const instance = create(<App />).toJSON();
    expect(instance).toMatchSnapshot();
  })
})
