import { useMemo } from 'react';
import { CarouselItem } from '../components/Carousel/Carousel.type';

interface useInitDataProps {
  rawData: any[];
  loopClonePerSide: number;
}

const useInitData = ({
  rawData = [],
  loopClonePerSide = 3,
}: useInitDataProps) => {
  const getListData = (): CarouselItem[] => {
    let result: CarouselItem[] = [];

    for (let i = 0; i <= loopClonePerSide * 2; i++) {
      result = [...result, ...rawData.map(getCarouselItem)];
    }

    return result;
  };

  const getCarouselItem = (item: any, index: number): CarouselItem => ({
    index,
    item,
  });

  const getInitialScrollIndex = () => {
    (Math.round((loopClonePerSide * 2 + 1) / 2) - 1) * rawData?.length;
  };

  const data = useMemo(getListData, [rawData]);
  const initialScrollIndex = useMemo(getInitialScrollIndex, [rawData]);

  return { data, initialScrollIndex };
};

export default useInitData;
