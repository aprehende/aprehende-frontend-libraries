import React, { useCallback, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';

import {
  BackdropContainer,
  CloseButtonContainer,
  ModalContainer,
  ModalSize,
} from './Modal.styles';

interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  open: boolean;
  backdrop?: boolean;
  onClose: () => void;
  size?: ModalSize;
  closeIcon?: React.ReactNode;
  closeable?: boolean;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open,
      backdrop,
      onClose,
      size = 'm',
      closeIcon,
      closeable,
      ...rest
    },
    ref
  ) => {
    const dialogContainer = useRef<HTMLDivElement>(null);
    const clickedOutsideZone = useCallback(
      (
        event:
          | HTMLElementEventMap['mousedown']
          | HTMLElementEventMap['touchstart']
      ) => {
        const containerNoClosable = event.target as Node;
        const isClickedOutside =
          dialogContainer.current &&
          dialogContainer.current.contains(containerNoClosable);
        if (isClickedOutside) return;
        onClose?.();
      },
      [onClose]
    );

    const removeEvents = useCallback((): void => {
      document.removeEventListener('mousedown', clickedOutsideZone);
      document.removeEventListener('touchstart', clickedOutsideZone);
    }, [clickedOutsideZone]);

    useEffect(() => {
      if (open && closeable) {
        document.addEventListener('mousedown', clickedOutsideZone);
        document.addEventListener('touchstart', clickedOutsideZone);
      } else removeEvents();

      return () => removeEvents();
    }, [onClose, open, closeable, clickedOutsideZone, removeEvents]);

    return (
      <BackdropContainer open={open} backdrop={backdrop} ref={ref}>
        {open && (
          <ModalContainer size={size} ref={dialogContainer} {...rest}>
            {size !== 'full' && <FocusLock>{open && children}</FocusLock>}
            {size === 'full' && open && children}
            <CloseButtonContainer onClick={onClose}>
              {closeIcon || 'X'}
            </CloseButtonContainer>
          </ModalContainer>
        )}
      </BackdropContainer>
    );
  }
);

export default Modal;
