import React from 'react';
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native'

import { OpenSans_400Regular, OpenSans_600SemiBold, useFonts } from '@expo-google-fonts/open-sans'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>

      <Routes />
    </>
  )
}
