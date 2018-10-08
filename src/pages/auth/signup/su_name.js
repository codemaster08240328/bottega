import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { styles } from './styles';
import { colors, strings, fontSize } from '@settings/app.config'
import LogoComponent from './components/logo';
import Wallpaper from '@components/Wallpaper'
import bgSrc from '@assets/FirstLastName.png';
// actions
import actions from '../../../redux/auth/action'

class SignUpName extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            fname:'',
            lname:'',
            message:''
        }

        this.onContinue = this.onContinue.bind(this);
    }

    onContinue(){
        if(!this.state.fname || !this.state.lname){
            this.setState({message:strings.fillinfields})
        }else{
            let data = {
                username:this.state.fname + ' ' + this.state.lname,
                firstname:this.state.fname,
                lastname:this.state.lname
            }
            this.props.dispatch(actions.setName(data));
        }
    }

    componentWillReceiveProps(nextProps){
        this.props.navigation.navigate("su_location");
    }

    render(){
        return(
            <View style = { styles.container }>
                <Wallpaper bgSrc = {bgSrc}>
                    <LogoComponent/>
                    <View style = { styles.form }>
                        <TextInput
                            onChangeText = {(fname) => this.setState({fname, message:''})} 
                            style = { styles.input }
                            placeholder = { strings.firstName }/>
                        <TextInput
                            onChangeText = {(lname) => this.setState({lname, message:''})} 
                            style = { styles.input }
                            placeholder = { strings.lastName }/>
                        <Button
                            onPress = {this.onContinue}
                            buttonStyle = { [styles.continue,{ marginTop:15 }] }
                            title = { strings.continue }
                        />
                        <Text style = {{color:colors.red, textAlign:'center', marginTop:5}}>{this.state.message}</Text>
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
  
export default connect(mapStateToProps)(SignUpName);