import React, { Component } from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet,
  Image 
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { colors } from '@settings/app.config'
import upload from '@assets/great_wave_remix_randal_roberts_fb.png'
import UploadForm from './components/UploadForm';

class UploadView extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Header title = "Upload"/>
        </View>
        <View style = {styles.main}>
          <ScrollView style = {{flex: 1}}>
            <Image
              source = {upload}
            />
            <UploadForm/>
          </ScrollView>
        </View>
        <View style = {styles.footer}>
          <Footer {...this.props}/>
        </View>

      </View>
      
    )
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
  footer: {
    height: 45,
    backgroundColor: colors.bottom_color
  },
  main: {
    flex: 1
  },
})


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadView)
