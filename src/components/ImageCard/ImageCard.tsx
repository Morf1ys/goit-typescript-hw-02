import React from 'react';
import css from './ImageCard.module.css';
import { Image } from '../../../api';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={css['image-card']}>
      <img src={urls.regular} alt={alt_description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
