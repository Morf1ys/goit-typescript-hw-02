import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../../api';

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={css['image-gallery']}>
      {images.map(image => (
        <li className={css.liphoto} key={image.id}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
