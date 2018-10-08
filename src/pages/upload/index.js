import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import {
  Grid,
  Col,
  Row
} from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridView from 'react-native-super-grid'
import Header from '@components/Header'
import Footer from '@components/Footer'
import upload from '@assets/great_wave_remix_randal_roberts_fb.png'
import plus from '@assets/group_plus.png'
import { colors, strings } from '@settings/app.config'
import images from '../../helpers/images'
import Dimensions from 'Dimensions'
const DEVICE_WIDTH = Dimensions.get('window').width
const itemWidth = (DEVICE_WIDTH-5)/4

class Upload extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props)
    console.log(itemWidth)

    this._renderItem = this._renderItem.bind(this)
    this._renderItem1 = this._renderItem1.bind(this)
    this.upload = this.upload.bind(this)
  }

  upload(){
    this.props.navigation.navigate('uploadview');
  }

  _renderItem(item, index){
    if(index==0){
      console.log("index:0:",item.source)
    }
    console.log()
    return(
      <View style = {styles.itemContainer}>
        <Image source = {item.source} />
      </View>
    )
  }

  _renderItem1(){
    const view = images.map((item) => {

    })
  }
  

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Header title = "Upload"/>
        </View>
        <View style = {styles.main}>
          <ScrollView style = {{flex:1}}>
          
              <Image
                source = {upload}
              />
              <TouchableOpacity
                style = {{marginTop: -62, marginLeft: DEVICE_WIDTH - 70}}
                onPress = {this.upload}
              >
                <Image
                  source = {plus}
                />
              </TouchableOpacity>
              
              <GridView
                items = {images}
                itemDimension = {itemWidth}
                style = {styles.gridView}
                spacing = {1}
                renderItem = {(item, index) => this._renderItem(item, index)}
              />
          </ScrollView>
        </View>
        <View style = {styles.tools}>
          <Text style = {{color: colors.white}} >{strings.library}</Text>
          <Text style = {{color: colors.grey}}>{strings.capture}</Text>
        </View>
        <View style = {styles.footer}>
          <Footer {...this.props}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    height: 50,
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.border,

  },  
  tools: {
    height:40,
    backgroundColor: colors.tools_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: "center"
  },
  footer: {
    height: 45,
    backgroundColor: colors.bottom_color
  },
  main: {
    flex: 1
  },
  gridView: {

    flex: 1
  },
  itemContainer: {
    width: itemWidth,
  }
})


const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps)(Upload)
