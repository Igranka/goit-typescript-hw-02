import { FC } from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "../../types";


 const ImageCard: FC<ImageCardProps> = ({
  openModal,
  image: { urls, description } ,
}) => {
  return (
    <img
      className={css.img}
      src={urls.small}
      alt={description}
      onClick={() => openModal(description, urls.regular)}
    />
  );
}

export default ImageCard;