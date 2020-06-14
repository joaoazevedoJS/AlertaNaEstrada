import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import bluetooth from '../../assets/blueto.png'

import styles from './styles'

export default function Bluetooth() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Play')
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={bluetooth} alt="Bluetooth" />
      <Text style={styles.sucess}>Sincronizado com Sucesso</Text>
    </View>
  )
}

