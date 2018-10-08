import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styles, styles_android } from './styles'
import { colors, strings, fontSize } from '@settings/app.config'
import { View, Platform, Text } from 'react-native'
// components
import LogoComponent from './components/logo'
import FormComponent from './components/form'
import SocialComponent from './components/social'
import Wallpaper from '@components/Wallpaper'
// actions
import actions from '../../../redux/auth/action'
// assets import
import bgSrc from '@assets/Email.png' 
class SignUp extends Component{
    constructor(props){
        super(props);
        this.onContinue = this.onContinue.bind(this);
    }

    onContinue(email){
        let data = {
            email:email
        }
        this.props.dispatch(actions.setEmail(data));
    }

    componentWillReceiveProps(nextProps){
        this.props.navigation.navigate("su_name");
    }

    render(){
        return(
            <View style = {Platform.OS === 'ios' ? styles.container:styles_android.container}>
                <Wallpaper bgSrc = {bgSrc}>
                    <LogoComponent />
                    <FormComponent {...this.props} onSubmit = {(email)=>this.onContinue(email) } />
                    <View style = {styles.or}>
                        <Text style = {{ color:colors.white, fontSize:fontSize.normal }}>{ strings.or }</Text>
                    </View>
                    <SocialComponent {...this.props}/>
                </Wallpaper>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        state:state.authReducer
    }
}
  
export default connect(mapStateToProps)(SignUp);