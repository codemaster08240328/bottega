import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    colors, 
    strings
} from '@settings/app.config';
import { fblogin } from '../../../../model/auth';
import { 
    styles, 
    styles_android 
} from '../styles';

export default class SocialComponent extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        fblogin(this.props);
    }

    render(){
        return(
            <View style = {styles.social}>
                <TouchableOpacity 
                    style={styles.facebook} 
                    onPress={this.onClick}>
                    <Icon 
                        type="font-awesome"
                        color={colors.white}
                        size={25}
                        name='facebook'
                    />
                    <Text style={styles.txt_fb}>{ strings.facebook }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}