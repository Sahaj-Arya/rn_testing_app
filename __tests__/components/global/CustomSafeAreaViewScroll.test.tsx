import {render} from '@testing-library/react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import {Text} from 'react-native';

describe('Custom Safe area scroll view', () => {
  it('should render', () => {
    const {getByText} = render(
      <CustomSafeAreaScrollView>
        <Text>Child 1</Text>
      </CustomSafeAreaScrollView>,
    );
    expect(getByText('Child 1')).toBeTruthy();
  });
});
