import { useEffect, useState } from 'react';

const useModal = (isOpen) => {
  const [modalProps, setModalProps] = useState();

  useEffect(() => {
    isOpen
      ? setModalProps({
          top: `${window.scrollY}px`,
          overflow: 'hidden',
          display: 'block',
        })
      : setModalProps({
          top: '0px',
          overflow: 'visible',
          display: 'none',
        });
  }, [isOpen]);

  if (modalProps) {
    document.getElementById('modal').style.top = `${modalProps.top}`;
    document.body.style.overflow = `${modalProps.overflow}`;
    document.getElementById('modal').style.display = `${modalProps.display}`;
  }
};

export default useModal;
