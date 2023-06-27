import React from 'react';
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
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    { children, open, backdrop, onClose, size = 'm', closeIcon, ...rest },
    ref
  ) => {
    return (
      <BackdropContainer open={open} backdrop={backdrop}>
        {open && (
          <ModalContainer size={size} ref={ref} {...rest}>
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
