/*
 *
 * SampleScreen
 *
 */

import React from 'react';
import { View, Text } from 'react-native';

function SampleScreen() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

export default React.memo(SampleScreen);
