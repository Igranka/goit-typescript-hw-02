import { FC } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageModalProps } from '../../types';

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  closeModal,
  imageInfo: { alt, url },
}) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        overlayClassName={css.overlay}
        className={css.large}
        closeTimeoutMS={350}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
      >
        <img src={url} alt={alt} />
      </Modal>
    </>
  );
}

export default ImageModal;