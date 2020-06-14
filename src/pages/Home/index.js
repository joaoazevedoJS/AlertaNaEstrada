import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import Button from '../../Components/Button'

export default function Play() {
  const navigation = useNavigation()

  function handleNavigatePlay() {
    navigation.navigate('Play')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Sincronizar seu SmartBand ou SmartWatch</Text>

      <Icon name="bluetooth" color="#f5f5f5" size={80} />

      <Button text="Procurar Dispositivo" />

      <TouchableOpacity style={styles.mainBtn} onPress={handleNavigatePlay}>
        <Text style={styles.mainBtnContent}>Pular</Text>
        <Icon name="chevron-right" style={styles.mainBtnContent} />
      </TouchableOpacity>
    </View>
  );
}
