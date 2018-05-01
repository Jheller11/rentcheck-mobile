import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
      estimate = (
        <View style={styles.estimateView}>
          <Text>
            Estimated monthly rent: ${parseInt(this.state.data.rent) - 100} - ${parseInt(
              this.state.data.rent
            ) + 100}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.props.clearId}>
            <Text>Start Over</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      estimate = <Text>Not Here</Text>
    }
    return (
      <View style={styles.estimate}>
        <View>{estimate}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  estimate: {
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
  },
  estimateView: {
    justifyContent: 'space-around',
    minHeight: 200
  }
})

export default Estimate
