import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles'

import pause from '../../assets/pause.png'

import Header from '../../Components/Header'
import Button from '../../Components/Button'
import ButtonImage from '../../Components/ButtonImage'
import Temp from '../../Components/Temp'

export default function Pause() {
  const [display, setDisplay] = useState('false')

  function handleDisplay() {
    display === 'true' ?
      setDisplay('false') :
      setDisplay('true')
  }

  return (
    <ScrollView style={styles.container}>
      <Header selected="Alerta" to="Pause" />

      <View style={styles.main}>
        <Text style={styles.mainTitle}>Aperte o botão para Pausar os Alertas</Text>

        <ButtonImage image={pause} alt='pause' to="Play" />

        <View style={display === 'true' ? { display: "none" } : ''}>
          <Button text="Mudar Temporizador" press={handleDisplay} />
        </View>

        <Temp dis={display} press={handleDisplay} />
      </View>

    </ScrollView>
  );
}
