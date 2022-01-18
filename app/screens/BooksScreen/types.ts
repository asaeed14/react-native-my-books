import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type BooksScreenRouteProp = RouteProp<RootStackParamList, 'Books'>;

type BooksScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Books'
>;

export type BooksScreenProps = {
  route: BooksScreenRouteProp;
  navigation: BooksScreenNavigationProp;
};
