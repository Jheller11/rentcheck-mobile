import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class Form extends Component {
  render() {
    return (
      <View style={styles.form}>
        <Text>Fill out the form below to receive your estimate: </Text>
        <View style={styles.formRow}>
          <Text>Bedrooms: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Bathrooms: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Size: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Parking: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  form: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 10
  }
})

export default Form
