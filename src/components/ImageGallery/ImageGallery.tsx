import { FC, forwardRef } from 'react';
import { ImageGalleryProps } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery: FC<ImageGalleryProps> = ({ data, openModal }) => {
  return (
    <ul className={css.gallery}>
      {data.map(image => {
        return (
          <li className={css.item} key={image.id}>
            <ImageCard openModal={openModal} image={image} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
