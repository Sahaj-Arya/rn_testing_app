import {render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';
import React from 'react';

describe('Onboard Item', () => {
  const title = 'My Button title';
  const subtitle = 'My Button sub';
  const buttonTitleFirst = 'My Button 1';
  const buttonTitleSecond = 'My Button 2';
  const imageSource = {uri: 'https://gif.png'};
  const onPressFirst = jest.fn(() => {});
  const onPressSecond = jest.fn(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with one button', () => {
    const {getByTestId, getByText} = render(
      <OnboardItem
        title={title}
        subtitle={subtitle}
        buttonTitleFirst={buttonTitleFirst}
        imageSource={imageSource}
        onPressFirst={onPressFirst}
      />,
    );

    expect(getByText('My Button title')).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });

  it('should render with two button', () => {
    const {getByTestId, getByText} = render(
      <OnboardItem
        title={title}
        subtitle={subtitle}
        buttonTitleFirst={buttonTitleFirst}
        imageSource={imageSource}
        onPressFirst={onPressFirst}
        onPressSecond={onPressSecond}
        buttonTitleSecond={buttonTitleSecond}
      />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(buttonTitleSecond)).toBeTruthy();
    expect(getByText(buttonTitleFirst)).toBeTruthy();
    expect(getByTestId('background-image')).toBeTruthy();
  });
});
