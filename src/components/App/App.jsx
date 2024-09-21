import { createRef, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { imageSerfer } from "../../axios";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({ alt: "", url: "" });
  const [error, setError] = useState(false);
  const galleryRef = createRef();

  useEffect(() => {
    async function fetchImages() {
      if (query.trim() === "") return;
      try {
        setError(false);
        setLoading(true);
        const data = await imageSerfer(query, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setLast(() => data.total_pages === page);
        if (data.total === 0) {
          return toast.error("Nothing");
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = async (prompt) => {
    setImages([]);
    setQuery(prompt);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (alt, url) => {
    setIsModalOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageInfo({ alt: "", url: "" });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {images.length > 0 && (
        <ImageGallery ref={galleryRef} openModal={openModal} data={images} />
      )}
      <ImageModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        imageInfo={imageInfo}
      />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && !last && !error && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
