import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hellow World as as text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText('good to see you', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    buttonElement.click();

    const paragraphElement = screen.getByText('Changed!');
    expect(paragraphElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    buttonElement.click();

    const paragraphElement = screen.queryByText('good to see you', { exact: false });
    expect(paragraphElement).toBeNull();
  });
})
