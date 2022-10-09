import React from 'react';
import { StyleSheet } from 'react-native';
import { base } from '../../constants';
import { Carousel } from '../Carousel';

import GalleryItem from './GalleryItem';

const IMAGE_SIZE = {
  width: base.dimension.width,
  height: base.dimension.height * 0.5,
};

const Gallery = ({ data = [] }) => {
  const renderItem = ({ item, index, ri }) => {
    return (
      <GalleryItem
        image={item.image_url}
        title={`index: ${index}`}
        description={`des`}
      />
    );
  };

  return (
    <Carousel
      horizontal
      loopClonePerSide={1}
      data={data}
      itemWidth={IMAGE_SIZE.width}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default Gallery;
