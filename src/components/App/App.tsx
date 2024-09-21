import { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from '../../axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMsg from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from '../../types';

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [last, setLast] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState({ alt: '', url: '' });

  useEffect(() => {
    async function fetchImages() {
      if (query.trim() === '') return;
      try {
        setError(false);
        setLoading(true);
        const imagesData = await getImages(query, page);
        setImages(prevState => [...prevState, ...imagesData.results]);
        setLast(() => imagesData.total_pages === page);
        if (imagesData.total === 0) {
          const notifyNoResults = () =>
            toast.error('Nothing');
          return notifyNoResults();
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);


  const handleSearch = async (prompt: string) => {
    setQuery(prompt);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (alt: string, url: string) => {
    setIsModalOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageInfo({ alt: '', url: '' });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {images.length > 0 && (
        <ImageGallery openModal={openModal} data={images} />
      )}
      <ImageModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        imageInfo={imageInfo}
      />
      {loading && <Loader />}
      {error && <ErrorMsg />}
      {images.length > 0 && !loading && !last && !error && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}