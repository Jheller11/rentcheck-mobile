import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Form from './components/Form'
import Estimate from './components/Estimate'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      id: ''
    }
    this.setEstimate = this.setEstimate.bind(this)
  }

  setEstimate(id) {
    this.setState({
      id: id
    })
  }

  render() {
    let estimate = ''
    if (this.state.id) {
      estimate = <Estimate estimate={this.state.id} />
    } else {
      estimate = <Text>Waiting for data</Text>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RentCheck DC</Text>
        <ScrollView style={styles.scroll}>
          <Form setEstimate={this.setEstimate} />
          <View>{estimate}</View>
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
