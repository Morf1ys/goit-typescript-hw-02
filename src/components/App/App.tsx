import React, { useState } from 'react';
import fetchImages, { Image } from '../../../api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Particle from '../Particle/Particl';

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const handleSearchSubmit = async (query: string) => {
    setLoading(true);
    try {
      const fetchedImages = await fetchImages(query, 1, perPage);
      setImages(fetchedImages);
      setPage(1);
      setQuery(query);
      setError(null);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const nextPageImages = await fetchImages(query, page + 1, perPage);
      setImages([...images, ...nextPageImages]);
      setPage(page + 1);
      setError(null);
    } catch (error) {
      console.error('Error fetching more images:', error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Particle />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage error={error.message} />}
      {!error && images.length > 0 && <ImageGallery images={images} onClick={handleImageClick}/>}
      {loading && <Loader />}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}
