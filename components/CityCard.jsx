import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { windowWidth } from '../utils/constants'

const CityCard = ({ cityName, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.cardContainer, styles.shadow]}>
        <Text style={styles.cityName}>{cityName}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    maxWidth: 500,
    height: 225,
    backgroundColor: 'grey',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cityName: {
    fontSize: 25,
    color: 'white',
  },
})

export default CityCard
