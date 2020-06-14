import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Header({ selected, to }) {
  const navigation = useNavigation()

  function handleNavigationDash() {
    navigation.navigate("Dashboard") 
  }

  function handleNavigationHome() {
    navigation.navigate("Home") 
  }

  function handleNavigationAlert() {
    to ? navigation.navigate(to) :
    navigation.goBack() 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={selected === 'Perfil' ? styles.btnSelected : styles.btnNavigate }
        onPress={handleNavigationHome}
      >
        <Text style={selected === 'Perfil' ? styles.selected : styles.navigate }>PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={selected === 'Alerta' ? styles.btnSelected : styles.btnNavigate }
        onPress={handleNavigationAlert}
      >
        <Text style={selected === 'Alerta' ? styles.selected : styles.navigate }>ALERTA</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={selected === 'Resumo' ? styles.btnSelected : styles.btnNavigate }
        onPress={handleNavigationDash}
      >
        <Text style={selected === 'Resumo' ? styles.selected : styles.navigate }>RESUMO</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header