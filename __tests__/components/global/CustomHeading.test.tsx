import {fireEvent, render} from '@testing-library/react-native';
import CustomHeading from '../../../src/components/global/CustomHeading';
import {goBack} from '../../../src/utils/NavigationUtil';

jest.mock('../../../src/utils/NavigationUtil', () => ({
  goBack: jest.fn(),
}));

describe('Custom Heading', () => {
  const title = 'Test title';
  it('Should render the title correctly', () => {
    const {getByText} = render(<CustomHeading title={title} />);

    expect(getByText(title)).toBeTruthy();
  });

  it('should go back on back press', () => {
    const {getByTestId} = render(<CustomHeading title={title} />);
    const backButton = getByTestId('back-button');

    fireEvent.press(backButton);
    expect(goBack).toHaveBeenCalled();
  });
});
