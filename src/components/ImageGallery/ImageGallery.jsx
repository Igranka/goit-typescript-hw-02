import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = forwardRef((props, ref) => {
  const { data, openModal } = props;
  return (
    <ul ref={ref} className={css.gallery}>
      {data.map((image) => {
        return (
          <li className={css.item} key={image.id}>
            <ImageCard openModal={openModal} images={image} />
          </li>
        );
      })}
    </ul>
  );
});

ImageGallery.displayName = "imageGallery";

export default ImageGallery;
