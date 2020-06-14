import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import Header from '../../Components/Header'
import DashGroupItem from '../../Components/DashGroupItem'
import DashItem from '../../Components/DashItem'
import LineGradient from '../../Components/LineGradient'

import styles from './styles'

function Dashboard() {
  return (
    <ScrollView>
      <Header selected="Resumo" />

      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.time}>06:00</Text>
        </View>

        <Text style={styles.description}>Total de Horas de Sono</Text>

        <DashGroupItem
          value1="03:00"
          desc1="Horas de Sono Leve"
          value2="03:00"
          desc2="Horas de Sono Profundo"
        />

        <DashGroupItem
          value1="03:00"
          desc1="Horas de Sono Leve"
          value2="03:00"
          desc2="Horas de Sono Profundo"
        />

        <DashItem
          value="800 Km"
          desc="Kilõmetros Percorridos"
        />

        <View style={{ marginTop: 8 }}>
          <LineGradient hg={8} />
        </View>

        <Text style={styles.title}>Média dos Dados</Text>

        <View style={styles.history}>
          <Text style={styles.historyTitle}>06:00</Text>
          <Text style={styles.historyDescription}>Total de Horas de Sono</Text>
        </View>

        <DashGroupItem
          value1="03:00"
          desc1="Horas de Sono Leve"
          value2="03:00"
          desc2="Horas de Sono Profundo"
        />

        <DashGroupItem
          value1="100 BPM"
          desc1="Frequência Cardíaca"
          value2="1200"
          desc2="Passos por Dia"
        />

        <View style={{ marginBottom: 32 }}>
          <DashItem
            value="1000 Km"
            desc="Kilõmetros Percorridos a cada 24 Horas"
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Dashboard