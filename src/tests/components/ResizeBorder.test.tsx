
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ResizeBorder } from '@components';
import { setResizeBorderWidthAction } from '@actions';
import { storeMocks } from '../__mocks__/store-mocks';

const mockStore = configureStore([]);
const store = mockStore(storeMocks);

interface ComponentProps {
  borderHeight?: number | null;
};

const renderComponent = (componentProps?: ComponentProps) => render(
  <Provider store={store}>
    <ResizeBorder {...componentProps} />
  </Provider>
);

describe('ResizeBorder', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderComponent();
    const resizeBorderComponent = getByTestId('resize-border');
    expect(resizeBorderComponent).toBeInTheDocument();
  });

  it('renders with borderHeight prop', () => {
    const borderHeight = 100;
    const { getByTestId } = renderComponent({ borderHeight });
    const resizeBorderComponent = getByTestId('resize-border');

    expect(resizeBorderComponent).toHaveStyle(`height: ${borderHeight}px`);
  });

  it('dispatches action with new width when resizing', () => {
    const { getByTestId } = renderComponent();
    const resizeBorderComponent = getByTestId('resize-border');

    fireEvent.mouseDown(resizeBorderComponent);

    const newWidth = 400;
    fireEvent.mouseMove(resizeBorderComponent, { clientX: newWidth });

    expect(store.getActions()).toEqual([
      setResizeBorderWidthAction(newWidth)
    ]);
    fireEvent.mouseUp(resizeBorderComponent);
  });
});
