import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SampleScreenRouteProp = RouteProp<RootStackParamList, 'Sample'>;

type SampleScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sample'
>;

export type SampleScreenProps = {
  route: SampleScreenRouteProp;
  navigation: SampleScreenNavigationProp;
};
