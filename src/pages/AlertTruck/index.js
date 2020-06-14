import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/logo.png'
import Biglogo from '../../assets/BigLogo.png'
import pause from '../../assets/pause.png'

import styles from './styles'

function AlertTruck() {
  const navigation = useNavigation()

  const [src, setSrc] = useState(logo)
  const [leftState, setLeftState] = useState(40)
  const [bgColor, setBgColor] = useState('#1C1E2F')

  useEffect(() => {
    setTimeout(() => { handleAnimation() }, 5000)
  }, [])

  useEffect(() => {
    setTimeout(() => { handleAnimation() }, 2000)
  }, [src])

  useEffect(() => {
    setTimeout(() => { handleAnimationBG() }, 10000);
  }, [])

  useEffect(() => {
    setTimeout(() => { handleAnimationBG() }, 15000)
  }, [bgColor])

  function handleAnimation() {
    if (src === logo) {
      setSrc(Biglogo)
      setLeftState(45)
    } else {
      setSrc(logo)
      setLeftState(40)
    }
  }

  function handleAnimationBG() {
    bgColor === "#1C1E2F" ?
      setBgColor('#4382EC') :
      setBgColor('#1C1E2F')
  }

  function handlePause() {
    navigation.navigate('Play')
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: bgColor
    }}>
      <View style={styles.container}>
        <Image source={src} />
      </View>

      <TouchableOpacity style={{
        position: "absolute",
        bottom: 40,
        left: leftState
      }}
        onPress={handlePause}
      >
        <Image source={pause} style={{
          width: 48,
          height: 48,
        }} />
      </TouchableOpacity>
    </View>
  )
}

export default AlertTruck