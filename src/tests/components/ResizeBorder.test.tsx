
import { render, fireEvent } from '@testing-library/react';
import { ResizeBorder } from '@components';
import { setResizeBorderWidthAction } from '@actions';
import { createProviders, store } from '../test-utils';

const wrapper = createProviders();

describe('ResizeBorder', () => {
  it('should renders with borderHeight prop', () => {
    const borderHeight = 100;
    const { getByTestId } = render(<ResizeBorder borderHeight={borderHeight}/>, { wrapper });
    const resizeBorderComponent = getByTestId('resize-border');

    expect(resizeBorderComponent).toHaveStyle(`height: ${borderHeight}px`);
  });

  it('should dispatches action with new width when resizing', () => {
    const { getByTestId } = render(<ResizeBorder />, { wrapper });
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
