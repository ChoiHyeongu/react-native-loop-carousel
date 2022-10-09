import React from 'react';
import type { Node } from 'react';

import { Gallery } from './src/components';
import { GALLERY_DATA } from './src/dummy';
import { View } from 'react-native';

const App: () => Node = () => {
  return (
    <View>
      <Gallery data={GALLERY_DATA} />
    </View>
  );
};

export default App;
