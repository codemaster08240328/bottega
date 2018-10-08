import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
export default class Header extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {{justifyContent:"center", paddingLeft:10, flex:1, alignItems:'flex-start'}}>
          <Icon
            name = "ios-arrow-back"
            type = "ionicon"
            size = {20}
          />
        </View>
        <View style = {styles.content}>
          <Text style = {{fontSize:20, fontWeight:'bold'}}> {this.props.title} </Text>
        </View>
        <View style = {{flex:1}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
