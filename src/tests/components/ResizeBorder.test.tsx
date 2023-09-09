
import { renderWithStore, fireEvent, store } from '../test-utils';
import { ResizeBorder } from '@components';
import { setResizeBorderWidthAction } from '@actions';

describe('ResizeBorder', () => {
  it('should renders without crashing', () => {
    const { getByTestId } = renderWithStore(<ResizeBorder />);
    const resizeBorderComponent = getByTestId('resize-border');
    expect(resizeBorderComponent).toBeInTheDocument();
  });

  it('should renders with borderHeight prop', () => {
    const borderHeight = 100;
    const { getByTestId } = renderWithStore(<ResizeBorder borderHeight={borderHeight}/>);
    const resizeBorderComponent = getByTestId('resize-border');

    expect(resizeBorderComponent).toHaveStyle(`height: ${borderHeight}px`);
  });

  it('should dispatches action with new width when resizing', () => {
    const { getByTestId } = renderWithStore(<ResizeBorder />);
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
