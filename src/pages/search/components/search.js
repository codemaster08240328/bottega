import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '@settings/app.config'
import Dimensions from 'Dimensions'
const DEVICE_WIDTH = Dimensions.get('window').width

export default class SearchComponent extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Icon
          type = "evilicon"
          name = "search"
          size = {30}
          color = {colors.font}
        />
        <TextInput
          placeholder = "Search..."
          style = {{marginLeft:10, color:colors.font}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0.5,
    borderColor:colors.border,
    width:DEVICE_WIDTH - 30,
    height:45,
    paddingLeft:10

  }
})
