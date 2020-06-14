import React from 'react';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function ButtonImage({ image, alt, to, temp }) {
  const navigation = useNavigation()
  
  function handleNavigate() {
    navigation.navigate(to, { temp })
  }

  return (
    <RectButton onPress={handleNavigate}>
      <Image source={image} alt={alt} style={styles.image} />
    </RectButton>
  );
}
