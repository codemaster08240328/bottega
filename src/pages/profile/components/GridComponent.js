import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GridView from 'react-native-super-grid'
import imageswithyear from '../../../helpers/imageswithyear'

import Dimensions from 'Dimensions'
const DEVICE_WIDTH = Dimensions.get('window').width
const itemWidth = (DEVICE_WIDTH-5)/4


class GridComponent extends Component {
  static propTypes = {
    prop: PropTypes
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text 
            style={{
              width: DEVICE_WIDTH, 
              textAlign: 'center', 
              paddingVertical: 10,
              fontWeight: "bold"
            }}
          >
            May 2018
          </Text>
          <GridView
            items = {imageswithyear['May']}
            itemDimension = {itemWidth}
            style = {styles.gridView}
            spacing = {1}
            renderItem = {(item, index) => this._renderItem(item, index)}
          />  
        </View>
        <View style={{marginTop:5}}>
          <Text 
            style={{
              width: DEVICE_WIDTH, 
              textAlign: 'center', 
              paddingVertical: 10,
              fontWeight: "bold"
            }}
          >
            June 2018
          </Text>
          <GridView
            items = {imageswithyear['June']}
            itemDimension = {itemWidth}
            style = {styles.gridView}
            spacing = {1}
            renderItem = {(item, index) => this._renderItem(item, index)}
          />  
        </View>
        <View style= {{marginTop:5}}>
          <Text
            style={{
              width: DEVICE_WIDTH,
              textAlign: 'center',
              paddingVertical: 10,
              fontWeight: 'bold'
            }}
          >
            July 2018
          </Text>
          <GridView
            items={imageswithyear['July']}
            itemDimension={itemWidth}
            style={styles.gridView}
            spacing={1}
            renderItem={(item,index) => this._renderItem(item, index)}
          />
        </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gridView: {
    flex: 1
  },
})

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(GridComponent)
