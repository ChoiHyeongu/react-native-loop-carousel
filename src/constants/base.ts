import { Dimensions } from 'react-native';

export const dimension = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const space = {
  padding: {
    // common: 20,
    common: 16,
    elevate: 16,
  },
  margin: {
    // common: 20,
    common: 16,
    elevate: 16,
  },
};
