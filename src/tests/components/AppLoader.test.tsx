import { render } from '@testing-library/react';
import { AppLoader } from '@components';

describe('AppLoader', () => {
  it('should renders successfully with provided styles', () => {
    const customStyles = 'custom-styles';
    const { getByTestId } = render(<AppLoader customStyles={customStyles} />)

    const loaderComponent = getByTestId('app-loader');

    expect(loaderComponent).toBeInTheDocument();
    expect(loaderComponent).toHaveClass(customStyles);
  });
});
