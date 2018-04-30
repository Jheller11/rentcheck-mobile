import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Form from './components/Form'
import Estimate from './components/Estimate'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RentCheck DC</Text>
        <ScrollView style={styles.scroll}>
          <Form />
          <Estimate />
        </ScrollView>
        <Text style={styles.footer}>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    minHeight: '100%'
  },
  title: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: '95%',
    marginLeft: '2.5%',
    height: 60,
    zIndex: 10,
    padding: 20
  },
  scroll: {
    minHeight: 600
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: '95%',
    marginLeft: '2.5%',
    height: 60,
    zIndex: 10,
    padding: 20
  }
})
