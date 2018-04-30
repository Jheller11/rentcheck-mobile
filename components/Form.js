import React, { Component } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      type: 'renter'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://rentcheck-dc.herokuapp.com/apartments/estimates', {
        type: this.state.type,
        baths: parseInt(this.state.baths),
        bedrooms: parseInt(this.state.bedrooms),
        size: parseInt(this.state.size),
        parking: parseInt(this.state.parking),
        neighborhood: 3
      })
      .then(res => {
        this.props.setEstimate(res.data)
      })
  }
  render() {
    return (
      <View style={styles.form}>
        <Text>
          Fill out the form below to receive your estimate or click help:{' '}
        </Text>
        <View style={styles.formRow}>
          <Text>Bedrooms: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
            onChangeText={text => {
              this.setState({
                bedrooms: text
              })
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Bathrooms: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
            onChangeText={text => {
              this.setState({
                baths: text
              })
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Size: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
            onChangeText={text => {
              this.setState({
                size: text
              })
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Parking: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
            onChangeText={text => {
              this.setState({
                parking: text
              })
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Text>Neighborhood: </Text>
          <TextInput
            placeholder="..."
            style={{ borderColor: 'grey', borderWidth: 1, minWidth: 60 }}
            value={''}
            onChangeText={text => {
              this.setState({
                neighborhood: text
              })
            }}
          />
        </View>
        <View style={styles.formRow}>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
            <Text>Get Estimate</Text>
          </TouchableOpacity>
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
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderColor: 'blue',
    borderWidth: 1,
    width: '50%',
    marginLeft: '25%'
  }
})

export default Form
