import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Measurement from '../components/Measurement'
import { BASE_URL } from '../utils/constants'

const DetailsScreen = ({ route }) => {
  const [cityMeasurements, setCityMeasurements] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { city } = route.params

  useEffect(async () => {
    await fetch(`${BASE_URL}/measurements?country=GB&city=${city}`)
      .then((data) => data.json())
      .then(({ results }) => setCityMeasurements(results))
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const renderMeasurement = ({ item }) => {
    return <Measurement measurement={item} />
  }

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
        <View style={styles.listContainer}>
          <Text style={styles.title}>{`Measurements for ${city}`}</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={cityMeasurements}
            renderItem={renderMeasurement}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  listContainer: {
    marginTop: 35,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    padding: 20,
  },
})
export default DetailsScreen
