/*
 *
 * BooksScreen
 *
 */

import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import useStateHandler from 'hooks/useStateHandler';
import { useBookListing } from 'containers/BookListing';

import FormattedMessage from 'theme/FormattedMessage';
import FlatList from 'theme/FlatList';
import Screen from 'theme/Screen';
import Image from 'theme/Image';
import Text from 'theme/Text';

import { BooksScreenProps } from './types';

import messages from './messages';
import style from './style';
import BookListingLoader from './Loader';

const BooksScreen: React.FC<BooksScreenProps> = (_props) => {
  const books = useBookListing({
    city: 'Paris', // multiple key's can be added for filters
  });

  const showContent = useStateHandler({
    state: books,
  });

  const renderItem = (_type, item) => (
    <View style={style.itemWrapper} key={item.id}>
      <Image
        uri={item.coverImage}
        style={style.coverImage}
        resizeMode="cover"
      />

      {!!item?.author && (
        <FormattedMessage
          style={style.authorNameLabel}
          {...messages.authorNameLabel}
          values={{ authorName: item.author }}
        />
      )}

      {!!item?.publishDate && (
        <FormattedMessage
          style={style.publishedDateLabel}
          {...messages.publishedDateLabel}
          values={{ publishedDate: item?.publishDate?.split('T')[0] }}
        />
      )}

      <Text style={style.shortDescription}>{item.shortDescription}</Text>
    </View>
  );

  return (
    <Screen
      testID="BooksScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      {!showContent ? (
        <BookListingLoader numberOfItems={3} />
      ) : (
        <Animatable.View style={style.container} animation="fadeInDown">
          <FlatList
            data={books.data || []}
            style={style.list}
            contentContainerStyle={style.listContent}
            renderItem={renderItem}
            itemHeight={200}
            forceNonDeterministicRendering
          />
        </Animatable.View>
      )}
    </Screen>
  );
};

export default React.memo(BooksScreen);
