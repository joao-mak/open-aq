import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import CityCard from '../components/CityCard'
import { BASE_URL } from '../utils/constants'

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(async () => {
    await fetch(`${BASE_URL}/cities?country=GB`)
      .then((data) => data.json())
      .then(({ results }) => setData(results))
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const navigateToDetails = (city) => {
    navigation.navigate('Details', { city })
  }

  const renderCityCard = ({ item }) => (
    <CityCard
      cityName={item.name}
      handlePress={() => navigateToDetails(item.name)}
    />
  )

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>{error}</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCityCard}
          data={data}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
