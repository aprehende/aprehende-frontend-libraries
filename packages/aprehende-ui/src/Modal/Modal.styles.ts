import styled from '@emotion/styled';

export const BackdropContainer = styled.div<{
  open?: boolean;
  backdrop?: boolean;
}>(({ open, backdrop }) => ({
  display: open ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  overflow: 'auto',
  zIndex: 1000,
  backgroundColor: backdrop ? 'rgba(0,0,0,0.4)' : 'transparent',
}));

const MODAL_WIDTH_SIZE = {
  sm: ['76.6%', '66.6%', '50%'],
  m: ['96.6%', '76.6%', '56.6%'],
  full: ['100%', '100%', '100%'],
};

const MODAL_PADDING_Y_SIZE = {
  sm: '48px',
  m: '56px',
  full: '68px',
};

export type ModalSize = 'sm' | 'm' | 'full';

export const ModalContainer = styled.div<{ size: ModalSize }>(({ size }) => ({
  position: 'relative',
  backgroundColor: 'white',
  padding: `${MODAL_PADDING_Y_SIZE[size]} ${
    size === 'full' ? MODAL_PADDING_Y_SIZE[size] : '0px'
  }`,
  maxHeight: size === 'full' ? '100vh' : '90vh',
  overflow: 'auto',
  height: size === 'full' ? '100vh' : 'auto',
  width: size === 'full' ? '100vh' : '90%',
  maxWidth: size === 'full' ? '100vh' : '90%',
  boxSizing: 'border-box',
  borderRadius: size === 'full' ? 'none' : '10px',
  margin: '0 auto',
  '@media (min-width: 768px)': {
    width:
      size === 'full' ? '100%' : `calc(${MODAL_WIDTH_SIZE[size][0]} - 64px)`,
    maxWidth: size === 'full' ? '100%' : MODAL_WIDTH_SIZE[size][0],
    margin: '0 auto',
  },
  '@media (min-width: 1024px)': {
    width:
      size === 'full' ? '100%' : `calc(${MODAL_WIDTH_SIZE[size][1]} - 184px)`,
    maxWidth: size === 'full' ? '100%' : MODAL_WIDTH_SIZE[size][1],
    margin: '0 auto',
  },
  '@media (min-width: 1366px)': {
    width:
      size === 'full' ? '100%' : `calc(${MODAL_WIDTH_SIZE[size][2]} - 288px)`,
    maxWidth: size === 'full' ? '100%' : MODAL_WIDTH_SIZE[size][2],
    margin: '0 auto',
  },
}));

export const CloseButtonContainer = styled.div(() => ({
  position: 'absolute',
  cursor: 'pointer',
  top: '15px',
  right: '20px',
}));
