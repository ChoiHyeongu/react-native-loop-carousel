/* eslint-disable no-shadow */
import React, { useRef } from 'react';
import { FlatList, View, ListRenderItemInfo } from 'react-native';
import { CarouselProps, CarouselItem } from './Carousel.type';
import { useInitData } from '../../hooks';

const Carousel = ({
  data: rawData = [],
  loopClonePerSide = 3,
  itemWidth,
  renderItem,
  ...props
}: CarouselProps) => {
  const listRef = useRef<FlatList>(null);

  const { data, initialScrollIndex } = useInitData({
    rawData,
    loopClonePerSide,
  });

  console.log('initialScrollIndex', initialScrollIndex);

  const renderCarousel = (
    info: ListRenderItemInfo<{ item: CarouselItem; index: number }>,
  ) => {
    return renderItem({
      item: info.item.item,
      index: info.index,
      separator: info.separators,
    });
  };

  const handleEndReached = (info: { distanceFromEnd: number }) => {
    if (props?.onEndReached) {
      props.onEndReached(info);
    }

    appendData();
  };

  const appendData = () => {
    // const lastItem = _.last(data);
    // if (lastItem) {
    //   const nextItemIndex =
    //     lastItem?.index === data.length - 1 ? 0 : lastItem?.index + 1;
    //   setData([...data, data[nextItemIndex]]);
    // }
  };

  const getKeyExtractor = (_item: CarouselItem, index: number) => {
    return `list-${index}`;
  };

  const getItemLayout = (
    data: CarouselItem[] | null | undefined,
    index: number,
  ) => {
    return { length: itemWidth, offset: itemWidth * index, index };
  };

  return (
    <View>
      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={getKeyExtractor}
        getItemLayout={getItemLayout}
        onEndReached={handleEndReached}
        {...props}
        initialNumToRender={data.length}
        initialScrollIndex={initialScrollIndex}
        renderItem={renderCarousel}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Carousel;
