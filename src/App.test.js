import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('will return undefined', () => {
  const mock = jest.fn();
  let result = mock("Hello")

  expect(result).toBeUndefined()
  expect(mock).toHaveBeenCalled()
})

test('implementing mock functions', () => {
  const mock = jest.fn(() => "Hello")

  expect(mock("World")).toBe("Hello")
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith("World")
})

test('mock implementation', () => {
  const mock = jest.fn().mockImplementation(() => "Hello")

  expect(mock("World")).toBe("Hello")
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith("World")
})

test('mock should return value', () => {
  const mock = jest.fn()
  mock.mockReturnValue("Hello")

  expect(mock("World")).toBe("Hello")
  expect(mock).toHaveBeenCalled()
})

test('mock should resolve promise', () => {
  const mock = jest.fn()
  mock.mockResolvedValue("Hello");

  expect(mock("World")).resolves.toBe("Hello")
  expect(mock).toHaveBeenCalledWith("World")

})