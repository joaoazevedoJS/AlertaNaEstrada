import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const AppStack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#333' } }}>
        <AppStack.Screen  name="Home" component={Home} />
        <AppStack.Screen  name="Dashboard" component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}