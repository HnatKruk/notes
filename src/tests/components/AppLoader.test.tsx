import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AppLoader } from '@components';

interface ComponentProps {
  customStyles: string,
};

const renderComponent = (componentProps?: ComponentProps) => render(
  <AppLoader {...componentProps} />
);

describe('AppLoader', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent();
    const loaderComponent = getByTestId('app-loader');
    expect(loaderComponent).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    const customStyles = 'custom-styles';
    const { getByTestId } = renderComponent({ customStyles });;
    const loaderComponent = getByTestId('app-loader');
    expect(loaderComponent).toHaveClass(customStyles);
  });
});
