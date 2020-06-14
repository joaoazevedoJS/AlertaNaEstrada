import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../Components/Header'

export default function Home() {
  return (
      <LinearGradient
        style={styles.container}
        colors={['#333', '#ddd']}
        start={[1, 0.7]}
        end={[0, 0]}
      >
        <Header />


        {/* <RectButton>
        <Image source={start} alt="Start" />
      </RectButton> */}
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
