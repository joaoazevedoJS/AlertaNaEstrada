import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'

import start from '../../assets/start.png'

import Header from '../../Components/Header'
import Button from '../../Components/Button'
import ButtonImage from '../../Components/ButtonImage'
import Temp from '../../Components/Temp'

export default function Play() {
  const [display, setDisplay] = useState('false')

  function handleDisplay() {
    display === 'true' ?
      setDisplay('false') :
      setDisplay('true')
  }

  return (
    <ScrollView style={styles.container}>
      <Header selected="Alerta" to="Play" />

      <View style={styles.main}>
        <Text style={styles.mainTitle}>Aperte o botão para Iniciar os Alertas</Text>

        <ButtonImage image={start} alt='start' to="Pause" />

        <View style={display === 'true' ? { display: "none" } : ''}>
          <Button text="Mudar Temporizador" press={handleDisplay} />
        </View>

        <Temp dis={display} press={handleDisplay} />
      </View>

    </ScrollView>
  );
}
