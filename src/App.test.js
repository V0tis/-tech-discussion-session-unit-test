import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('ConterView, CountButtons가 렌더 될 때', () => {
    render(<App />);
    const view = screen.getByText('현재 숫자: 0');
    const buttons = screen.getAllByRole('button');

    expect(view).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it('버튼 클릭 할 떄 마다 1 증가 해유', () => {
    render(<App />);
    const initialScreen = screen.getByText('현재 숫자: 0');
    expect(initialScreen).toBeInTheDocument();

    const incrementBtn = screen.getByTestId('incrementBtn');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    const changedScreen = screen.getByText('현재 숫자: 3');
    expect(changedScreen).toBeInTheDocument();
  });

  it('버튼 클릭 할 떄 마다 1 감소 해유', () => {
    render(<App />);
    const initialScreen = screen.getByText('현재 숫자: 0');
    expect(initialScreen).toBeInTheDocument();

    const decrementBtn = screen.getByTestId('decrementBtn');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    const changedScreen = screen.getByText('현재 숫자: -2');
    expect(changedScreen).toBeInTheDocument();
  });
});
