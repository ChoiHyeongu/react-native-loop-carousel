import type { FlatListProps } from 'react-native';

export interface CarouselItem {
  item: any;
  index: number;
}

export interface CarouselProps<ItemT = any> extends FlatListProps<ItemT> {
  data: any[];
  itemWidth: number;
  loopClonePerSide?: number;
  // renderItem: ListRenderItemInfo<CarouselItem>;
}
