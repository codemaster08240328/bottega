import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { styles } from './styles';
import { colors, strings, fontSize } from '@settings/app.config';
import LogoComponent from './components/logo';
import AvatarViewer from './components/avatar.js';
import { register } from '../../../model/auth'
import Wallpaper from '@components/Wallpaper'
import bgSrc from '@assets/AdditionalInfo.png';

// actions
import actions from '../../../redux/auth/action'

class SignUpFinal extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: '',
            url: '',
            inspirations: '',
            bio: ''
        }
        this.onContinue = this.onContinue.bind(this);
        this.uploadAvatar = this.uploadAvatar.bind(this);
    }

    uploadAvatar(avatar){
        this.setState({avatar})
        console.log(avatar)
    }

    onContinue(){
        data = { 
            avatar: this.state.avatar,
            site_link: this.state.url,
            inspirations: this.state.inspirations,
            bio: this.state.bio
        }
        this.props.dispatch(actions.setFinal(data));
        setTimeout(()=>{
            this.props.navigation.navigate('bottega');            
        },1000);
    }

    componentWillReceiveProps(nextProps){
        register(nextProps.user);
        
    }

    render(){
        return(
            <View style = { styles.container }>
                <Wallpaper bgSrc = {bgSrc}>
                    <LogoComponent/>
                    <View style = { styles.main }>
                        <AvatarViewer uploadAvatar = {(avatar)=>this.uploadAvatar(avatar)}/>
                        <TextInput 
                            onChangeText = {(url) => this.setState({url})}
                            style = { styles.input }
                            placeholder = { strings.url }/>
                        <TextInput 
                            onChangeText = {(inspirations) => this.setState({inspirations})}
                            style = { styles.input }
                            placeholder = { strings.inspiration }/>
                        <TextInput
                            onChangeText = {(bio) => this.setState({bio})}
                            multiline = {true}
                            numberOfLines = {3} 
                            style = {[ styles.input, {height:100} ]}
                            placeholder = { strings.bio }/>
                        <Button
                            onPress = {this.onContinue}
                            buttonStyle = { [styles.continue,{ marginTop:15 }] }
                            title = { strings.continue }
                        />
                    </View>
                </Wallpaper>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.authReducer.user
    }
}
  
export default connect(mapStateToProps)(SignUpFinal);