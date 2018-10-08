import React, { Component } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Platform
} from 'react-native';
import { Button } from 'react-native-elements'
import {
    styles, 
    styles_android
} from '../styles';
import { 
    colors, 
    strings, 
} from '@settings/app.config';
import { EmailValidation } from '../../../../helpers/helper';

import Voice from 'react-native-voice';
import Modal from "react-native-modal";
// import { debug } from 'util';


export default class FormComponent extends Component {
    constructor(props){
        super(props);   
        this.state = {
            email:'',
            message:'',
            description: '',
            is_alert: false,
            is_started: false,
            title: '',
        }
        
        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);

        this.onStartButtonPress = this.onStartButtonPress.bind(this);
        this.closeModal = this.closeModal.bind(this);


        this.onContinue = this.onContinue.bind(this);
    }

    onContinue(){
        var valid = EmailValidation(this.state.email);
        if(valid){
            this.props.onSubmit(this.state.email);
        }else{
            this.setState({message:strings.invalidEmail})
        }
    }

    onStartButtonPress(e){
        console.log("start voice detection");
        if (this.state.is_started == false) {
            Voice.start('en-US');
            this.setState({
                title: "Voice Detection Started!",
                description: "Please say a Value you want and click voice detection button again to finish the voice detection.",
                is_alert: true
            });
            setTimeout(() => {
                this.setState({ is_alert: false });
            }, 3000);
            
            this.setState({ is_started: true });
        } else {
            this.setState({
                title: "Voice Detection Finished!",
                description: "Please click the voice detection button to start the voice detection.",
                is_alert: true
            });
            setTimeout(() => {
                this.setState({ is_alert: false });
            }, 3000);
            this.setState({ is_started: false });
            this.onSpeechEndHandler();
        }
        
    }

    closeModal() {
        this.setState({ is_alert: false });
    }

    onSpeechStartHandler(e) {
        console.log("start+++++++++", e);
    }

    onSpeechEndHandler(e) {
        console.log("end+++++++++", e);
    }

    onSpeechResultsHandler(e) {
        console.log("result+++++++++", e);
        this.setState({ email: e.value[0] });
    }

    render(){
        return(
            <View style={Platform.OS==='ios' ? styles.form : styles_android.form}>
                <View style = {{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
                    <Button
                        onPress = { this.onStartButtonPress }
                        buttonStyle = {styles.continue}
                        title = {strings.voice}
                    />
                    <Modal isVisible={this.state.is_alert}>
                        <View style = { styles.modalContent }>
                            <Text>{ this.state.title }</Text>
                            <Text>{ this.state.description }</Text>
                        </View>
                    </Modal>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style={styles.signup}>{strings.signup}</Text>
                </View>
                <View style={{flex:1}}>
                    <TextInput 
                        onChangeText={(email) => this.setState({message:'', email})}
                        style={styles.input}
                        value={this.state.email}
                        placeholder={strings.email}/>
                    
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Button
                        onPress={this.onContinue}
                        buttonStyle={styles.continue}
                        title={strings.continue}
                    />
                    <Text style={{color:colors.red, textAlign:'center', marginTop:5}}>{this.state.message}</Text>
                </View>
            </View>
        )
    }
}