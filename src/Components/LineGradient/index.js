import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

function DashItem({ hg }) {
  return (
    <LinearGradient
      colors={['#384BF1', '#B314FF']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{ height: hg, width: 300, marginTop: 16, borderRadius: 8 }}
    />
  )
}

export default DashItem