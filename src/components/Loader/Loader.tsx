import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css['loader-container']}>
      <ColorRing 
        visible={true}
        height="180"
        width="180"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};

export default Loader;
