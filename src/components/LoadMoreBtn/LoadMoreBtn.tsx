import { FC } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from "../../types"

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.btn} onClick={handleLoadMore} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;