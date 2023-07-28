import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setResizeBorderWidthAction } from '../../store/actions';
import styles from './styles.module.scss';

export const ResizeBorder = ({ borderHeight }) => {
  const dispatch = useDispatch();
  const [isResizing, setIsResizing] = useState(false);

  const MIN_WIDTH = 200;
  const MAX_WIDTH = 600;

  useEffect(() => {
    const handleMouseMove = (event) => {
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

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsResizing(true);
  };

  return (
    <div
      className={styles.resizeBorder}
      onMouseDown={handleMouseDown}
      style={borderHeight && { height: `${borderHeight}px` }}
    >
      <div className={styles.resizeBorder__before} />
      <div className={styles.resizeBorder__after} />
    </div>
  );
};

ResizeBorder.defaultProps = {
  borderHeight: null,
};
