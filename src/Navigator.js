import { createStackNavigator } from 'react-navigation';
import SignUp from './pages/auth/signup/signup';
import SignUpName from './pages/auth/signup/su_name';
import SignUpLocation from './pages/auth/signup/su_location';
import SignUpEducation from './pages/auth/signup/su_education';
import SignUpFinal from './pages/auth/signup/su_final';
import Bottega from './pages/bottega';
import Search from './pages/search';
import Upload from './pages/upload';
import UploadView from './pages/upload/UploadView';
import Profile from './pages/profile'


const RootNavigator = createStackNavigator({
    signup: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    su_name: {
      screen: SignUpName,
      navigationOptions: {
        header: null
      }
    },
    su_location: {
      screen: SignUpLocation,
      navigationOptions: {
        header: null
      }
    },
    su_education: {
      screen: SignUpEducation,
      navigationOptions: {
        header: null
      }
    },
    su_final: {
      screen: SignUpFinal,
      navigationOptions: {
        header: null
      }
    },
    bottega: {
      screen: Bottega,
      navigationOptions: {
        header: null
      }
    },
    search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    upload: {
      screen: Upload,
      navigationOptions: {
        header: null
      }
    },
    uploadview: {
      screen: UploadView,
      navigationOptions: {
        header: null
      }
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    }
},{
    // initialRouteName: 'signup',
    initialRouteName: 'bottega',
});
export default RootNavigator;
