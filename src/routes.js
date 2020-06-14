import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Play from './pages/Play'
import Pause from './pages/Pause'
import Dashboard from './pages/Dashboard'

const AppStack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#2C2F33' } }}>
        <AppStack.Screen  name="Home" component={Home} />  
        <AppStack.Screen  name="Play" component={Play} />  
        <AppStack.Screen  name="Pause" component={Pause} />  
        <AppStack.Screen  name="Dashboard" component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}