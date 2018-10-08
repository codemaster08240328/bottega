import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { styles } from './styles';
import { colors, strings, fontSize } from '@settings/app.config'
import LogoComponent from './components/logo';
import Wallpaper from '@components/Wallpaper'
import bgSrc from '@assets/Education.png';
// actions
import actions from '../../../redux/auth/action'

class SignUpEducation extends Component {
    constructor(props){
        super(props)
        this.state = {
            education:''
        }
        this.onContinue = this.onContinue.bind(this)
    }
    
    onContinue(){
        let data = {
            education : this.state.location
        }
        this.props.dispatch(actions.setEducation(data));
    }

    componentWillReceiveProps(nextProps){
        this.props.navigation.navigate('su_final');
    }

    render(){
        return(
            <View style = { styles.container }>
                <Wallpaper bgSrc = {bgSrc}>
                    <LogoComponent/>
                    <View style = { styles.form }>
                        <TextInput 
                            onChangeText = {(education)=>this.setState({education})}
                            style = { styles.input }
                            placeholder = { strings.education }/>
                        <Button
                            onPress = { this.onContinue }
                            buttonStyle = { [styles.continue,{ marginTop:15 }] }
                            title = { strings.continue }
                        />
                    </View>
                    <View style = {{ flex:4 }}></View>
                </Wallpaper>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        state:state
    }
}
  
export default connect(mapStateToProps)(SignUpEducation);