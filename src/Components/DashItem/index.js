import React from 'react'
import { Text, View } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles'

function DashItem({
  title,
  description,
  icon,
}) {
  return (
    <View style={styles.container}>
      <Icon name='user' style={styles.icon} />

      <View style={styles.header}>
        <Text style={styles.title}>92 BPM</Text>
        <Text style={styles.description}>Frequência Cardíaca</Text>
      </View>
    </View>
  )
}

export default DashItem