import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setResizeBorderWidthAction } from '@actions';
import styles from './styles.module.scss';

interface NoteTextareaProps {
  borderHeight: number | null;
};

export const ResizeBorder: FC<NoteTextareaProps> = ({ borderHeight }) => {
  const dispatch = useDispatch();
  const [isResizing, setIsResizing] = useState(false);

  const MIN_WIDTH: number = 200;
  const MAX_WIDTH: number = 600;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isResizing) {
        const newWidth = event.clientX;
        dispatch(setResizeBorderWidthAction(
          Math.min(Math.max(newWidth, MIN_WIDTH), MAX_WIDTH)
        ));
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsResizing(true);
  };

  return (
    <div
      className={styles.resizeBorder}
      onMouseDown={handleMouseDown}
      style={{ height: borderHeight !== null ? `${borderHeight}px` : undefined }}
    >
      <div className={styles.resizeBorder__before} />
      <div className={styles.resizeBorder__after} />
    </div>
  );
};

ResizeBorder.defaultProps = {
  borderHeight: null,
};
