import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/Navigator';
import MyNetInfo from './src/helpers/netinfo';
import Dimensions from 'Dimensions';
import Parse from 'parse/react-native';
import User from './src/model/user';
import { PARSE_KEY, URL } from '@settings/app.config';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

console.disableYellowBox = true;

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize(PARSE_KEY.APP_ID, PARSE_KEY.JAVASCRIPT_KEY, PARSE_KEY.MASTER_KEY);
      

    
    Parse.serverURL = URL.parseURL;
    // Parse.Object.registerSubclass('User', User)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{width:DEVICE_WIDTH, height:DEVICE_HEIGHT}}>
          <RootNavigator/>
          <MyNetInfo/>
        </View>
      </Provider>
    );
  }
}
