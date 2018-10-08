import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
import { colors, strings, fontSize } from '@settings/app.config'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    log:{
        flex:3,
        justifyContent:"center",
        alignItems:'center',
    },
    form:{
        flex:4,
        alignItems:'center'
    },
    or:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    social:{
        flex:4,
        alignItems:'center'
    },
    input:{
        padding:10,
        width:DEVICE_WIDTH-30,
        fontSize:fontSize.normal,
        backgroundColor:colors.white,
        marginTop:6
    
    },
    continue:{
        width:DEVICE_WIDTH-30,
        backgroundColor:colors.btn_green,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
    },
    voice:{
        width:DEVICE_WIDTH-30,
        backgroundColor:colors.btn_green,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
    },
    facebook:{
        width:DEVICE_WIDTH-30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:colors.btn_primary,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,

    },
    logo:{   },
    signup:{ color:colors.white, width:DEVICE_WIDTH-30, fontSize:fontSize.normal },
    txt_fb:{ marginLeft:10, color:colors.white, fontSize:fontSize.normal },
    main:{
        flex:8,
        alignItems:'center'
    },
    avatar:{
        height:70,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    
});

const styles_android = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      log:{
          flex:3,
          justifyContent:"center",
          alignItems:'center',
      },
      form:{
          flex:3,
          alignItems:'center'
      },
      or:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      social:{
          flex:5,
          alignItems:'center'
      },
      input:{
          padding:10,
          width:DEVICE_WIDTH-30,
          fontSize:fontSize.normal,
          backgroundColor:colors.white
      
      },
      continue:{
          width:DEVICE_WIDTH-30,
          backgroundColor:colors.btn_green,
          shadowColor: colors.black,
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5,
      },
      voice:{
        width:DEVICE_WIDTH-30,
        backgroundColor:colors.btn_green,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
      },
      facebook:{
          width:DEVICE_WIDTH-30,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          paddingVertical:10,
          backgroundColor:colors.btn_primary,
          shadowColor: colors.black,
          shadowOpacity: 0.5,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 5,
  
      },
      logo:{width:100, height:50, backgroundColor:'yellow'},
      signup:{color:colors.white, width:DEVICE_WIDTH-30, fontSize:fontSize.normal},
      txt_fb:{marginLeft:10, color:colors.white, fontSize:fontSize.normal},

      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});

export { styles, styles_android }