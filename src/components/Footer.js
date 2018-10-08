import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements'
import Avatar from './Avatar'
import bottega from '@assets/bottom_1.png'
import search from '@assets/bottom_2.png'
import upload from '@assets/bottom_3.png'
import avatarpng from '@assets/avatar1.png'

const androidstyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingTop:5,
        paddingBottom: 5
    },
    tab:{
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:"space-between",
    }

});

const iosstyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    tab:{
        flex:1,
        height:'100%',
        alignItems:'center',
        justifyContent:"center",
    },
    bottega_f: {height:25, width:25, resizeMode: 'stretch', tintColor:'#007cca'},
    bottega: {height:25, width:25, resizeMode: 'stretch'},
    search_f: {height:25,width:25,resizeMode: 'stretch',tintColor:'#007cca'},
    search: {height:25,width:25,resizeMode: 'stretch'},
    upload_f: {height:25,width:25,resizeMode: 'stretch',tintColor:'#007cca'},
    upload: {height:25,width:25,resizeMode: 'stretch'},
});

const styles = (Platform.OS==="ios") ? iosstyles : androidstyles;



export default class FooterTab extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    itemClicked = (page)=>{
        if(page!="more"){
            this.props.navigation.navigate(page)
        }else if(page=="more"){
            this.props.navigation.openDrawer();
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                  style={styles.tab} 
                  onPress={()=>this.itemClicked("bottega")}
                >
                  <Image 
                    source={bottega} 
                    style={this.props.page=='Bottega'?iosstyles.bottega_f:iosstyles.bottega}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.tab} 
                  onPress = {()=>this.itemClicked("search")}>
                  <Image 
                    source = {search} 
                    style = {this.props.page=='Search'?iosstyles.search_f:iosstyles.search}/>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.tab} 
                  onPress = {()=>this.itemClicked("upload")}>
                  <Image 
                    source = {upload} 
                    style = {this.props.page=='Upload'?iosstyles.upload_f:iosstyles.upload}/>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.tab} 
                  onPress = {()=>this.itemClicked("profile")}>
                  <Avatar
                    size="small"
                    rounded
                    source={avatarpng}
                    activeOpacity={0.7}
                  />
                </TouchableOpacity>
            </View>
        )
    }
}