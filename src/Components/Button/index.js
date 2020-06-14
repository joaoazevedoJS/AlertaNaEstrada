import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function Button({ text, press }) {
  return (
    <RectButton style={styles.btn} onPress={press}>
      <Text style={styles.btnText}>{text}</Text>
    </RectButton>
  );
}
