import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import axios from 'axios'

class Estimate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    axios
      .get(
        `https://rentcheck-dc.herokuapp.com/apartments/estimates/${
          this.props.estimate
        }`
      )
      .then(res => {
        let apartment = res.data[0]
        this.setState({
          data: apartment
        })
      })
      .then(() => {
        console.log('done')
      })
  }

  render() {
    let estimate = ''
    if (this.state.data) {
      estimate = <Text>{parseInt(this.state.data.rent)}</Text>
    } else {
      estimate = <Text>Not Here</Text>
    }
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>{estimate}</Text>
      </View>
    )
  }
}

export default Estimate
