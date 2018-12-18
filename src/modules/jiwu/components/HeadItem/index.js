
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class HeadItem extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}></View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>总记录</Text>
          <Text>7,739</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingLeft: 5,
    paddingRight: 5,
  },
  icon: {
    backgroundColor: 'gray',
    width: 60,
    height: 60,
		marginTop: 'auto',
		marginBottom: 'auto',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
  },
  text: {
    width: '100%',
    backgroundColor: 'gray'
  }
});