import React from 'react';
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button className={css.loadMoreBtn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
