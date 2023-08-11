import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Co() {
  return (
    <View>
      <Text style={styles.headings}>Goraa is my favourite</Text>
      <Text style={styles.subHeading}>But I miss train wali aunty</Text>

    </View >
  )
}

const styles = StyleSheet.create({
  headings: {
    color: "white",
    fontSize: 40,
  },
  subHeading: {
    backgroundColor: 'green',
    color: 'white',
    width: 100,
    textAlign: 'center',
  }
})