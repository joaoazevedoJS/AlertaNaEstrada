import React from 'react';
import { AppLoading } from 'expo'
import { StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning: Can\'t perform a React'])

import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>

      <Routes />
    </>
  )
}
