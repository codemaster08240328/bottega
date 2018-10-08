import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import Avatar from '@components/Avatar'
import Dimensions from 'Dimensions'
const DEVICE_HEIGHT = Dimensions.get('window').height;
import image from '@assets/image1.png'
import avatarpng from '@assets/avatar1.png'
import { colors } from '@settings/app.config'
import tool from '@assets/tool.png'
import menu from '@assets/3-dots.png'


export default class Cotent extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.top}>
          <Avatar
            rounded
            source={avatarpng}
            activeOpacity={0.7}
          />
          <Image
            source = {menu}
            style ={{width:31, height:31}}
          />
        </View>
        <View style = {styles.image}>
          <Image
            source = {image}
          />
        </View>
        <View style = {styles.bottom}>
          <View style = {styles.detail}>
            <View style = {{flex:9}}>
              <Text style = {{fontSize:20, fontWeight:'bold'}}>Joe Iron</Text>
              <Text style = {{color:colors.font}}>San Francisco, CA, Born 1960</Text>
            </View>
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
              <View style = {{height:20, width:20, backgroundColor:'green', borderRadius:10}}></View>
            </View>
          </View>
          <View style = {styles.detail}>
            <View style = {{flex:9}}>
              <Text style = {{color:colors.font}}><Text style = {{fontSize:16, fontWeight:'bold', color:colors.black}}>Distorted Face </Text>1995</Text>
              <Text style = {{color:colors.font}}>Acrylic, mixed media, computer generated</Text>
            </View>
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Image
                source = {tool}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:DEVICE_HEIGHT - 110,
    borderBottomWidth:0.5,
    borderColor:colors.border
  },
  top:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center'
  },
  image:{
    flex:8
  },
  bottom:{
    marginTop:15,
    flex:3,
    paddingHorizontal:20,
    paddingVertical:10
  },
  detail:{
    flex:1,
    paddingVertical:10,
    flexDirection:'row'
  }
})
