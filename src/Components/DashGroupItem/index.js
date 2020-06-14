import React from 'react'
import { Text, View } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import styles from './styles'

function DashItem({
  title,
  HeaderDesc,
  headerIcon,
  icon,
  description
}) {
  return (
    <View style={styles.container}>
        <Icon name='user' size={40} />

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>92 BPM</Text>
          <Text style={styles.headerDescription}>Frequência Cardíaca</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Icon name={icon} size={24} style={{ marginRight: 24 }} />
        <Text style={styles.contentDescription}>{description}</Text>
      </View>
    </View>
  )
}

export default DashItem