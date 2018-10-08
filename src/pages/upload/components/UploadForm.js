import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  StyleSheet, 
  TouchableOpacity,
  Switch
} from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import { colors } from '@settings/app.config'

import mic from '@assets/mic.png'
import mic_small from '@assets/mic_small.png'
import Dimensions from 'Dimensions'
const DEVICE_WIDTH = Dimensions.get('window').width

export default class UploadForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
    this.onSwitch = this.onSwitch.bind(this)
  }

  onSwitch(){
    this.setState({status: !this.state.status})
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {{justifyContent:'center', alignItems:'center', height: 70, paddingVertical: 10}}>
          <Image
            source = {mic}
          />
        </View>
        <View style={styles.item}>
          <TextInput
            placeholder = "Title"
            style = {styles.input}
          />
        </View>
        <View style={[styles.item, {flexDirection: "row"}]}>
          <View style = {{flex: 1, paddingRight: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Date"
            />
          </View>
          <View style = {{flex: 1, paddingLeft: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Medium"
            />
          </View>
        </View>
        <View style={[styles.item, {flexDirection: "row"}]}>
          <View style = {{flex: 1, paddingRight: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Name"
            />
          </View>
          <View style = {{flex: 1, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {this.state.status?{color: colors.border}:{}}>Public</Text>
            <Text>/</Text>
            <Text style = {!this.state.status?{color: colors.border}:{}}>Private</Text>
            <Switch
              style = {{marginLeft:5}}
              onValueChange = {this.onSwitch}
              value = {this.state.status}
            />
          </View>
        </View>
        <View style={styles.item_detail}>
          <View style = {{padding: 5, alignItems: 'flex-end', width: '100%', zIndex: 100, marginTop: -80}}>
            <TouchableOpacity>
              <Icon
                type = "feather"
                name = "mic"
                color = {colors.border}
                size = {20}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder = "Description"
            multiline
            style = {styles.text_area}
          />
        </View>
        <View style={[styles.item, {flexDirection: "row"}]}>
          <View style = {{flex: 1, paddingRight: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Dimensions"
            />
          </View>
          <View style = {{flex: 1, paddingLeft: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Weight"
            />
          </View>
        </View>
        <View style={[styles.item, {flexDirection: "row"}]}>
          <View style = {{flex: 1, paddingRight: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Price"
            />
          </View>
          <View style = {{flex: 1, paddingLeft: 10}}>
            <TextInput
              style = {styles.input}
              placeholder = "Location"
            />
          </View>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style = {[styles.input, {backgroundColor: colors.bottom_color, alignItems: "center"}]}>
            <Text style = {{color: colors.white}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  item_detail: {
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    width: "100%",
  },
  text_area: {
    padding: 10,
    height: 130,
    borderWidth: 0.5,
    borderColor: colors.border,
    width: "100%",
    position: 'absolute',
    zIndex: 50
  }
})

