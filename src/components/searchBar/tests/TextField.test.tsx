import { fireEvent, render, screen } from '@testing-library/react';

import TextField from '../TextField';

const context = describe;

/**
 * 1. props 확인
 * 2. 입력한 텍스트로 호출 되는지 확인
 */
describe('TextField', () => {
  const label = 'Name';
  const text = 'Zima';

  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder="Input your name"
        text={text}
        setText={setText}
      />
    ));
  }

  it('renders elements', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(/Input/);
    screen.getByDisplayValue(text);
  });

  context('when user enters name', () => {
    it('calls “setText” handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
