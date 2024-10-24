import {render, screen} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/CustomButton';
import React from 'react';

describe('Custom Button', () => {
  const onPress = jest.fn();
  const loading = true;
  const title = 'Custom Btn';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders custom button', () => {
    render(<CustomButton title={title} onPress={() => {}} />);

    const buttonText = screen.getByText(title);

    expect(buttonText).toBeTruthy();
  });

  it('renders activity indicator', () => {
    render(<CustomButton title={title} loading={loading} onPress={() => {}} />);
    const testId = screen.getByTestId('activity-indicator');
    expect(testId).toBeOnTheScreen();
  });
});
