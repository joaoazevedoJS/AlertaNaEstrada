import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import pause from '../../assets/pause.png'

import Header from '../../Components/Header'
import Button from '../../Components/Button'
import ButtonImage from '../../Components/ButtonImage'
import Time from '../../Components/Time'

export default function Pause() {
  const navigation = useNavigation()

  const [display, setDisplay] = useState('false')
  const [backToAlert, setBackToAlert] = useState('false')

  function handleDisplay() {
    display === 'true' ?
      setDisplay('false') :
      setDisplay('true')
  }

  if(backToAlert === 'true') {
    navigation.navigate('Play')
  }

  useEffect(() => {
    setTimeout(() => {
      setBackToAlert('true')
      navigation.navigate('AlertTruck')
    }, 20000)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Header selected="Alerta" to="Pause" />

      <View style={styles.main}>
        <Text style={styles.mainTitle}>Aperte o botão para Pausar os Alertas</Text>

        <ButtonImage image={pause} alt='pause' to="Play" />

        <View style={display === 'true' ? { display: "none" } : ''}>
          <Button text="Mudar Temporizador" press={handleDisplay} />
        </View>

        <Time dis={display} press={handleDisplay} />
      </View>

    </ScrollView>
  );
}
