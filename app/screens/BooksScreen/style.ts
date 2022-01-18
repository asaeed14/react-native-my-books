/**
 *
 * Styles for BooksScreen
 *
 */

import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.screenHeight,
  },
  list: {
    width: Dimensions.screenWidth,
    height: '100%',
  },
  listContent: {
    paddingBottom: Dimensions.space2x,
    paddingHorizontal: Dimensions.space2x,
    alignItems: 'center',
  },
  itemWrapper: {
    width: Dimensions.screenWidth - Dimensions.space4x,
    margin: Dimensions.space2x,
    alignItems: 'center',
    borderRadius: Dimensions.borderRadius3x,
    backgroundColor: Colors.white,
    ...elevation(1),
  },
  coverImage: {
    width: 100,
    height: 130,
    borderRadius: Dimensions.borderRadius2x,
    marginVertical: Dimensions.space2x,
  },
  authorNameLabel: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  publishedDateLabel: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
  shortDescription: {
    fontSize: 14,
    color: Colors.textBlack,
    textAlign: 'justify',
    margin: Dimensions.space2x,
  },
  loaderWrapper: {
    width: Dimensions.screenWidth - Dimensions.space4x,
    margin: Dimensions.space2x,
    alignItems: 'center',
    borderRadius: Dimensions.borderRadius3x,
    backgroundColor: Colors.white,
    ...elevation(1),
  },
  coverImageLoader: {
    width: 100,
    height: 130,
    borderRadius: Dimensions.borderRadius2x,
    marginVertical: Dimensions.space2x,
    backgroundColor: Colors.skeleton,
  },
  authorNameLoader: {
    width: 100,
    height: 10,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.skeleton,
  },
  publishedDateLoader: {
    width: 100,
    height: 10,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.skeleton,
    marginVertical: Dimensions.space2x,
  },
  shortDescriptionLoader: {
    width: '90%',
    height: 80,
    borderRadius: Dimensions.borderRadius2x,
    backgroundColor: Colors.skeleton,
    marginBottom: Dimensions.space2x,
  },
});

export default style;
