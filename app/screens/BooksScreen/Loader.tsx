/**
 *
 * BookListingLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeletonAnimation } from 'react-native-animated-skeleton';

import style from './style';

interface BookListingLoaderProps {
  numberOfItems: number;
}

const BookListingLoader: React.FC<BookListingLoaderProps> = ({
  numberOfItems,
}) => {
  const animatedStyle = useSkeletonAnimation({ speed: 1000 });

  return (
    <View style={style.container}>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <View key={i} style={style.loaderWrapper}>
          <Animated.View style={[style.coverImageLoader, animatedStyle]} />
          <Animated.View style={[style.authorNameLoader, animatedStyle]} />
          <Animated.View style={[style.publishedDateLoader, animatedStyle]} />
          <Animated.View
            style={[style.shortDescriptionLoader, animatedStyle]}
          />
        </View>
      ))}
    </View>
  );
};

export default BookListingLoader;
