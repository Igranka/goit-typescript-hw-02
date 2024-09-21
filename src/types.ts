import React, { MutableRefObject, RefObject } from 'react';

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt: string;
}

export interface ImageCardProps {
  openModal: (description: string, urls: string) => void;
  image: Image;
}

export interface ImageGalleryProps {
  openModal: (description: string, urls: string) => void;
  data: Image[];
  lastImageRef?: RefObject<HTMLLIElement>;
  ref?: MutableRefObject<HTMLDivElement | null>;
}

export interface ImageModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  imageInfo: {
    alt: string;
    url: string;
  };
}

export interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}