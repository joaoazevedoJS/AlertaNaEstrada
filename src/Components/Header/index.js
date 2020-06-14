import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles'

function Header({ toDash = 'sliders' }) {
  const navigation = useNavigation()

  function handleNavigationDash() {
    toDash === 'sliders' ?
      navigation.navigate('Dashboard') :
      navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.group}>
        <Icon name="user" size={32} color="#fff" />
        <Text style={styles.groupText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.group} onPress={handleNavigationDash} >
        <Icon name={toDash} size={32} color="#fff" />
        <Text style={styles.groupText}>
          { toDash === 'sliders' ? 'Histórico' : '' }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header