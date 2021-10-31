import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { windowHeight, windowWidth } from '../utils/constants'

const Measurement = ({ measurement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{`Date: ${measurement.date.local}`}</Text>
      <Text
        style={styles.details}
      >{`Parameter: ${measurement.parameter}`}</Text>
      <Text style={styles.details}>{`Unit: ${measurement.unit}`}</Text>
      <Text style={styles.details}>{`Value: ${measurement.value}`}</Text>
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
  details: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
})
export default Measurement
