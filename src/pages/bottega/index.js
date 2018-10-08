import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { colors } from '@settings/app.config'
import Footer from '@components/Footer'
import Content from './components/content'

import logo from '@assets/head_logo.png'

export class Bottega extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : ["","",""]
    }
    this._renderItem = this._renderItem.bind(this);
  }
  
  _renderItem(item){
    return(
      <Content/>
    )
  }


  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image
            source = {logo}
          />
        </View>
        <View style = {styles.main}>
          <FlatList
            data = {this.state.data}
            renderItem = {(item)=>this._renderItem(item)}
          />
        </View>
        <View style = {styles.footer}>
          <Footer {...this.props} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white
  },
  header:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    height:55,
    borderBottomWidth:0.5,
    borderColor:colors.border
  },
  main:{
    flex:10,
  },
  footer:{
    height:45,
    backgroundColor:colors.bottom_color
  }
})


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottega)
