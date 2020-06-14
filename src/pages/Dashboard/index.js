import React from 'react'
import { ScrollView } from 'react-native'

import Header from '../../Components/Header'
import DashItem from '../../Components/DashItem'

function Dashboard() {
  return (
    <ScrollView>
      <Header toDash='arrow-left' />
      
      <DashItem />
      <DashItem />
      <DashItem />

    </ScrollView>
  )
}

export default Dashboard