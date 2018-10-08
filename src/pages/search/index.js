import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchComponent from './components/search'
import { colors } from '@settings/app.config'
import Header from '@components/Header'
import Footer from '@components/Footer'

import trend from '@assets/trend.png'
import price from '@assets/price.png'
import region from '@assets/region.png'
import medium from '@assets/medium.png'

class Search extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Header title = "Search"/>
        </View>
        <View style = {styles.main}>
          <View style = {styles.search}>
            <SearchComponent/>
          </View>
          <View style = {styles.line}>
            <View style = {{flex:1, alignItems:'center', paddingLeft:10}}>
              <Image source = {trend}/>
              <Text style = {{marginTop:10}}>Artists that are trending</Text>
            </View>
            <View style = {{flex:1, alignItems:'center', paddingRight:10}}>
              <Image source = {medium}/>
              <Text style = {{marginTop:10}}>Ranked by Medium</Text>
            </View>
          </View>
          <View style = {styles.line}>
            <View style = {{flex:1, alignItems:'center', paddingLeft:10}}>
              <Image source = {region}/>
              <Text style = {{marginTop:10}}>Ranked by Region</Text>
            </View>
            <View style = {{flex:1, alignItems:'center', paddingRight:10}}>
              <Image source = {price}/>
              <Text style = {{marginTop:10}}>Ranked by Price</Text>
            </View>
          </View>
        </View>
        <View style = {styles.footer}>
          <Footer {...this.props}/>
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
    height:50,
    marginTop:15,
    borderBottomWidth:0.5,
    borderColor:colors.border,

  },  
  footer:{
    height:45,
    backgroundColor:colors.bottom_color
  },
  main:{
    flex:1
  },
  line:{
    flex:3,
    flexDirection:'row'
  },
  search:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center'
  }
})


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
