import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Form from './components/Form'
import Estimate from './components/Estimate'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      id: ''
    }
    this.setEstimate = this.setEstimate.bind(this)
    this.clearId = this.clearId.bind(this)
  }

  setEstimate(id) {
    this.setState({
      id: id
    })
  }

  clearId() {
    this.setState({
      id: ''
    })
  }

  info() {
    alert('this is the info')
  }

  help() {
    alert('this is the help')
  }

  render() {
    let estimate = ''
    if (this.state.id) {
      estimate = <Estimate estimate={this.state.id} clearId={this.clearId} />
    } else {
      estimate = <Form setEstimate={this.setEstimate} />
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>RentCheck DC</Text>
        <ScrollView style={styles.scroll}>
          <View>{estimate}</View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.info}>
            <Text style={styles.button}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.help}>
            <Text style={styles.button}>Help</Text>
          </TouchableOpacity>
        </View>
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
    minHeight: '100%'
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    borderWidth: 2,
    borderColor: 'grey',
    minWidth: '95%',
    marginLeft: '2.5%',
    height: 60,
    zIndex: 10,
    padding: 20,
    fontWeight: '800',
    fontSize: 25,
    color: 'darkred'
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
    width: '95%',
    marginLeft: '2.5%',
    height: 60,
    zIndex: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    color: 'blue'
  }
})
