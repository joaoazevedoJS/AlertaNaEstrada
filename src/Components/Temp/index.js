import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function Temp({ dis, press }) {
  const [min, setMin] = useState(0)
  const [second, setSecond] = useState(30)

  function handlePlus() {
    if (second === 50) {
      setSecond(0)
      setMin(min + 1)
    } else {
      setSecond(second + 10)
    }
  }

  function handleMinus() {
    if(min === 0 && second === 10) {
      setSecond(10)
      return;
    } else if (second === 0) {
      setSecond(50)
      setMin(min - 1)
    } else {
      setSecond(second - 10)
    }
  }

  return (
    <View style={dis === 'false' ? styles.dis : styles.content}>
      <View style={styles.temp}>
        <TouchableOpacity>
          <Icon name="minus" color="#2C2F33" size={24} onPress={handleMinus} />
        </TouchableOpacity>

        <Text style={styles.time}>
          {min < 10 ? '0' + min : min}:
          {second < 10 ? '0' + second : second}
        </Text>

        <TouchableOpacity>
          <View>
            <Icon name="plus" color="#2C2F33" size={24} onPress={handlePlus} />
          </View>
        </TouchableOpacity>
      </View>

      <RectButton style={styles.alter} onPress={press}>
        <Text style={styles.alterText}>Alterar</Text>
      </RectButton>
    </View>
  );
}
