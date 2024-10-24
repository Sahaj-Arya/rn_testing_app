import {act, fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import Input from '../../../src/components/ui/Input';

describe('Input', () => {
  const value = 'string';
  const onChangeText = jest.fn();
  const placeholder = 'string';
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  it('renders properly', () => {
    const {getByTestId} = render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />,
    );
    // const testId = screen.getByTestId('textInput');
    expect(getByTestId('parent-container')).toBeTruthy();
  });

  it('should handle multiple focus/blur ', () => {
    const {getByTestId} = render(
      <Input
        value={''}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />,
    );
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});
    fireEvent(getByTestId('textInput'), 'focus', {});
    fireEvent(getByTestId('textInput'), 'blur', {});

    expect(onFocus).toHaveBeenCalledTimes(2);
    expect(onBlur).toHaveBeenCalledTimes(2);
  });

  it('should be focused', () => {
    render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={onFocus}
      />,
    );
    const testId = screen.getByTestId('textInput');

    act(() => {
      fireEvent(testId, 'focus', {});
    });
    expect(onFocus).toHaveBeenCalled();
  });

  it('should be focused/blur when not provided', () => {
    render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />,
    );
    const testId = screen.getByTestId('textInput');

    act(() => {
      fireEvent(testId, 'focus', {});
      fireEvent(testId, 'blur', {});
    });
  });

  it('should be disabled', () => {
    render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={true}
      />,
    );
    const testId = screen.getByTestId('textInput');
    expect(testId).toBeOnTheScreen();
  });
  it('should apply disabled style', () => {
    const {getByTestId} = render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled
      />,
    );
    const inputId = getByTestId('parent-container');
    expect(inputId).toHaveStyle({pointerEvents: 'none'});
    const textId = getByTestId('textInput');
    expect(textId.props.editable).toBe(false);
  });

  it('on error', () => {
    render(
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        error={'error'}
      />,
    );
    const testId = screen.getByTestId('errorText');
    expect(testId).toHaveTextContent('error');
  });
});
