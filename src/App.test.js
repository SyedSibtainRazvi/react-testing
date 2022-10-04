import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test ('will return undefined', () => {
  const mock = jest.fn();

  let result = mock("Hello")

  expect(result).toBeUndefined()
  expect(mock).toHaveBeenCalled()
})

test('implementing mock functions', () => {
  const mock =jest.fn(() => "Hello")

  expect(mock("foo")).toBe("Hello")
})