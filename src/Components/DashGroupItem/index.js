import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import LineGradient from '../LineGradient'

function DashItem({
  value1,
  desc1,
  value2,
  desc2,
}) {
  return (
    <>
      <View style={styles.dashGroup}>
        <View style={styles.dashGroupItems}>
          <Text style={styles.itemTitle}>{value1}</Text>
          <Text style={styles.itemDescription}>{desc1}</Text>
        </View>

        <View style={{ borderRightColor: "#454A73", borderRightWidth: 1 }} />

        <View style={styles.dashGroupItems}>
          <Text style={styles.itemTitle}>{value2}</Text>
          <Text style={styles.itemDescription}>{desc2}</Text>
        </View>
      </View>

      <LineGradient hg={4} />
    </>
  )
}

export default DashItem