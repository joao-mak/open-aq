import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import StackNavigator from './navigation/StackNavigator'

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StackNavigator />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
