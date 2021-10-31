import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { windowHeight, windowWidth } from '../utils/constants'

const Measurement = ({ measurement }) => {
  return (
    <View style={styles.container}>
      <Text>{`Date: ${measurement.date.local}`}</Text>
      <Text>{`Parameter: ${measurement.parameter}`}</Text>
      <Text>{`Unit: ${measurement.unit}`}</Text>
      <Text>{`Value: ${measurement.value}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    height: windowHeight * 0.2,
    width: windowWidth,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
  },
  details: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
})
export default Measurement
