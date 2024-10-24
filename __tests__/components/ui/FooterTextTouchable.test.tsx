import {fireEvent, render, screen} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';
import React from 'react';

describe('FooterTextTouchable', () => {
  const onPress = jest.fn();
  const text = 'Press Me';

  it('renders properly', () => {
    render(<FooterTextTouchable onPress={onPress} text={text} />);
    const title = screen.getByText(text);
    expect(title).toBeOnTheScreen();
  });

  it('should call onPress on press', () => {
    render(<FooterTextTouchable onPress={onPress} text={text} />);
    const footerView = screen.getByTestId('footer-button');
    fireEvent.press(footerView);
    expect(onPress).toHaveBeenCalled();
  });
  it('should show style', () => {
    render(<FooterTextTouchable onPress={onPress} text={text} />);
    const footerView = screen.getByTestId('footer-view');
    expect(footerView).toHaveStyle({
      position: 'relative',
      alignSelf: 'center',
    });
  });
});
