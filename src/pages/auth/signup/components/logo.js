import React, { Component } from 'react';
import { 
    View, 
    Image, 
    Platform
} from 'react-native';
import { 
    styles, 
    styles_android 
} from '../styles';
import logoSrc from '@assets/logo.png';

export default class LogoComponent extends Component{
    render(){
        return(
            <View style={Platform.OS ==='ios' ? styles.log : styles_android.log}>
                <Image
                    source={logoSrc}
                    style={styles.logo}
                    />
            </View>
        )
    }
}