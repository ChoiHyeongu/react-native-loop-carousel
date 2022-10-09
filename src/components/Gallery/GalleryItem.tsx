import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import { base } from '../../constants';

const IMAGE_SIZE = {
  width: base.dimension.width,
  height: base.dimension.height * 0.5,
};

const GalleryItem = ({ image, title, description }) => {
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE.width,
    height: IMAGE_SIZE.height,
  },
});

export default GalleryItem;
