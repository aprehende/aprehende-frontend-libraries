import { fireEvent, render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Modal from '../Modal';

const APR_MODAL_BACKDROP = 'apr-modal-backdrop';
const APR_MODAL_CLOSE_ICON = 'apr-modal-close-icon';
const BACKDROP_DISPLAY_NONE = 'display: none';
const BACKDROP_DISPLAY_FLEX = 'display: flex';

describe('Modal', () => {
  it('the modal should be displayed', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByText, getByTestId, rerender } = render(
      <Modal open={true} onClose={onClose}>
        {children}
      </Modal>
    );
    const backDrop = getByTestId(APR_MODAL_BACKDROP);
    const childrenElement = getByText(children);
    expect(backDrop).toHaveStyle(BACKDROP_DISPLAY_FLEX);
    expect(childrenElement).toBeInTheDocument();
    rerender(
      <Modal open={false} onClose={onClose}>
        {children}
      </Modal>
    );
    expect(backDrop).toHaveStyle(BACKDROP_DISPLAY_NONE);
  });

  it('the modal should be displayed full', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByText } = render(
      <Modal open={true} onClose={onClose} size="full">
        {children}
      </Modal>
    );
    expect(getByText(children)).toBeInTheDocument();
  });

  it('the modal should not be displayed', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByTestId } = render(
      <Modal open={false} onClose={onClose}>
        {children}
      </Modal>
    );
    expect(getByTestId(APR_MODAL_BACKDROP)).toHaveStyle(BACKDROP_DISPLAY_NONE);
  });

  it('the modal should not be displayed', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} backdrop>
        {children}
      </Modal>
    );
    const closeIcon = getByTestId(APR_MODAL_CLOSE_ICON);
    expect(closeIcon).toHaveStyle('backgroundColor: "rgba(0,0,0,0.4)"');
  });

  it('the modal should not be displayed', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} backdrop>
        {children}
      </Modal>
    );
    const closeIcon = getByTestId(APR_MODAL_CLOSE_ICON);
    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });

  it('the modal should not be displayed', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} backdrop closeable>
        {children}
      </Modal>
    );
    const closeIcon = getByTestId(APR_MODAL_CLOSE_ICON);
    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });

  it('the modal should hidde after the click in the backdrop', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByTestId } = render(
      <Modal open={true} onClose={onClose} backdrop closeable>
        {children}
      </Modal>
    );
    const backdrop = getByTestId(APR_MODAL_BACKDROP);
    fireEvent.mouseDown(backdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it('the modal should not hidde after the click in the children element', () => {
    const onClose = vi.fn();
    const children = 'Hola';
    const { getByText } = render(
      <Modal open={true} onClose={onClose} backdrop closeable>
        <div>{children}</div>
      </Modal>
    );
    const childrenElement = getByText(children);
    fireEvent.mouseDown(childrenElement);
    expect(onClose).not.toHaveBeenCalled();
  });
});
