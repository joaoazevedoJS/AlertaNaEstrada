import React from 'react'
import { Text, View } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles'

function DashItem({
  title,
  titleDesc,
  icon,
  description
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerDescription}>{titleDesc}</Text>
        </View>
        <Icon name='trending-up' size={40} />
      </View>

      <View style={styles.content}>
        <Icon name='watch' size={24} style={{ marginRight: 24 }} />
        <Text style={styles.contentDescription}>Você Andou x Horas</Text>
      </View>
    </View>
  )
}

export default DashItem