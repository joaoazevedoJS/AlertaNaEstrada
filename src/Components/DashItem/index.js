import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

function DashItem({
  value,
  desc,
}) {
  return (
    <View style={styles.dashItem}>
      <Text style={styles.itemTitle}>{value}</Text>
      <Text style={styles.itemDescription}>{desc}</Text>
    </View>
  )
}

export default DashItem