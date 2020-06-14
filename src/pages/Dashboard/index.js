import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import Header from '../../Components/Header'
import DashItem from '../../Components/DashItem'

import styles from './styles'

function Dashboard() {
  return (
    <ScrollView>
      <Header selected="Resumo" />
      
      <View style={styles.section}>
        <Text style={styles.title}>Dados Diários</Text>
      </View>

      <DashItem />

      <DashItem />
      <DashItem />

    </ScrollView>
  )
}

export default Dashboard