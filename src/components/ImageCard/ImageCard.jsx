import css from "./ImageCard.module.css";

export default function ImageCard({
  openModal,
  images: { urls, description },
}) {
  return (
    <img
      className={css.img}
      src={urls.small}
      alt={description}
      onClick={() => openModal(description, urls.regular)}
    />
  );
}