import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { styles } from './styles';
import { colors, strings, fontSize } from '@settings/app.config'
import LogoComponent from './components/logo';
import Wallpaper from '@components/Wallpaper'
import bgSrc from '@assets/Location.png';
// actions
import actions from '../../../redux/auth/action'

class SignUpLocation extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            location:''
        }
        this.onContinue = this.onContinue.bind(this);
    }

    onContinue(){
        let data = {
            location : this.state.location
        }
        this.props.dispatch(actions.setLocation(data));
    }

    componentWillReceiveProps(nextProps){
        this.props.navigation.navigate('su_education');
    }

    render(){
        return(
            <View style = { styles.container }>
                <Wallpaper bgSrc = {bgSrc}>
                    <LogoComponent/>
                    <View style = { styles.form }>
                        <TextInput 
                            onChangeText = {(location)=>this.setState({location})}
                            style = { styles.input }
                            placeholder = { strings.location }/>
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
  
export default connect(mapStateToProps)(SignUpLocation);