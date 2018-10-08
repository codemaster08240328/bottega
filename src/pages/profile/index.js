import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '../../components/Avatar'
import GridView from 'react-native-super-grid'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { colors, strings } from '@settings/app.config'
import images from '../../helpers/images'
import Dimensions from 'Dimensions'
import RNPickerSelect from 'react-native-picker-select'
import GridComponent from './components/GridComponent'

import setting_png from '@assets/setting.png'
import avatarpng from '@assets/avatar1.png'
import gridpng from '@assets/grid.png'
import gridpng_f from '@assets/grid_f.png'
import rowpng from '@assets/row.png'
import rowpng_f from '@assets/row_f.png'
import oval1 from '@assets/oval_1.png'
import oval2 from '@assets/oval_2.png'
import oval3 from '@assets/oval_3.png'
import oval4 from '@assets/oval_4.png'
import oval5 from '@assets/oval_5.png'
const DEVICE_WIDTH = Dimensions.get('window').width
const itemWidth = (DEVICE_WIDTH-5)/4

export class Profile extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props)
    this.state = {
      align: 'grid',
      items:[{
          label: 'Price',
          value: 'price'
        },{
          label: 'Date Uploaded',
          value: 'uploaded_date'
        },{
          label: 'Etc',
          value: 'etc'
      }],
      filteredBy: ''
    }
  }
  


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Profile"/>
        </View>
        <View style={styles.main}>
          <ScrollView style={{flex:1}}>
            <View style={styles.firstSec}>
              <View style={[styles.firstSecSub, {paddingLeft: 10}]}>
                <Avatar
                  size="medium"
                  rounded
                  source={avatarpng}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
              </View>
              <View style={styles.firstSecSub}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}> 323 </Text>
                <Text style={{fontSize: 12, marginTop: 5}}> Posts </Text>
              </View>
              <View style={styles.firstSecSub}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}> 2543 </Text>
                <Text style={{fontSize: 12, marginTop: 5}}> Followers </Text>
              </View>
              <View style={styles.firstSecSub}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}> 265 </Text>
                <Text style={{fontSize: 12, marginTop: 5}}> Following </Text>
              </View>
              <View style={styles.firstSecSub}>
                <Image
                  source={setting_png}
                />
              </View>
            </View>
            <View style={styles.secondSec}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>Joe Iron</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>www.joeiron.com</Text>
              <Text style={{fontSize: 12, color: '#3E3E3E'}}>Bio Aenean a laoreet risus. Praesent in scelerisque lorem, ac lacinia quam. Aliquam nibh enim, cursus eleifend augue vel.</Text>
            </View>
            <View style={styles.thirdSec}>
              <View style={{flex: 3, flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={()=>this.setState({align: 'grid'})}
                  style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}
                >
                  <Image
                    source={this.state.align=='grid' ? gridpng_f : gridpng}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{justifyContent: 'center', flex: 1, alignItems: 'flex-start', paddingLeft: 20}}
                  onPress={()=>this.setState({align: 'row'})}
                >
                  <Image
                    source={this.state.align!='grid' ? rowpng_f : rowpng}
                  />
                </TouchableOpacity>
                
                
              </View>
              <View style={{flex:2, paddingRight: 20}}>
                <Text style={{paddingVertical: 5, fontSize: 10}}>Filtered by:</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a item...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            filteredBy: value,
                        });
                    }}
                    style={{ ...styles }}
                />
              </View>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 12, marginLeft: 20, marginTop: 15}}> Related Artists: </Text>
            <View style={{flexDirection: 'row', height: 80, paddingHorizontal: 20, marginTop: 10}}>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Avatar
                  size="medium"
                  rounded
                  source={oval1}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
                <Text style={{fontSize: 10, marginTop: 8}}>John Smith</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Avatar
                  size="medium"
                  rounded
                  source={oval2}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
                <Text style={{fontSize: 10, marginTop: 8}}>Sarah Jane</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Avatar
                  size="medium"
                  rounded
                  source={oval3}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
                <Text style={{fontSize: 10, marginTop: 8}}>Amy Mare</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Avatar
                  size="medium"
                  rounded
                  source={oval4}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
                <Text style={{fontSize: 10, marginTop: 8}}>Bob Jones</Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Avatar
                  size="medium"
                  rounded
                  source={oval5}
                  activeOpacity={0.7}
                  avatarStyle={{borderWidth: 3, borderColor: '#bcbcbc'}}
                />
                <Text style = {{fontSize: 10, marginTop: 8}}>Luke Apple</Text>
              </View>

            </View>
            <View style={{flex: 1}}>
              <GridComponent/>
            </View>
              
              {/* <GridView
                items={images}
                itemDimension={itemWidth}
                style={styles.gridView}
                spacing={1}
                renderItem={(item, index) => this._renderItem(item, index)}
              /> */}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Footer {...this.props}/>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
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
  gridView: {

    flex: 1
  },
  itemContainer: {
    width: itemWidth,
  },
  firstSec: {
    height: 60,
    flexDirection: 'row'
  },
  secondSec: {
    height: 60,
    paddingHorizontal: 20,
    marginTop: 10
    
  },
  firstSecSub: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  thirdSec: {
    height: 70,
    flexDirection: "row",
    marginTop: 15
  },
  inputIOS: {
    fontSize: 12,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
  },
  icon: {
    marginTop: -10
  }
})

const mapStateToProps=(state) => ({
  
})

const mapDispatchToProps={
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
