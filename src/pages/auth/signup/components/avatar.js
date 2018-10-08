import React, { Component } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Image 
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Avatar from '@components/Avatar';
import plusPng from '@assets/plus.png';
import avatarpng from '@assets/avatar.png';
import { styles } from '../styles';

const options = {
    title: 'Select Photo',
    takePhotoButtonTitle: 'Take a photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1,
}
export default class AvatarViewer extends Component{

    constructor(props){
        super(props);
        this.state={
            imageSource: null
        }
        this.getPhoto = this.getPhoto.bind(this)
    }

    getPhoto(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else {
                const source =  response.data
                this.setState({ imageSource: source });
                this.props.uploadAvatar(response.data)
            }
          }); 
    }

    render(){
        return(
            <View style = {styles.avatar}>
                <Avatar
                    size="large"
                    rounded
                    source={(this.state.imageSource!=null) ? {uri:`data:image/jpeg;base64,${this.state.imageSource}`}:avatarpng}
                    activeOpacity={0.7}
                />
                <View style={{marginLeft:38, marginTop:-7}}>
                    <TouchableOpacity onPress={this.getPhoto}>
                        <Image source={plusPng} />
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

