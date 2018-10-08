import Parse from 'parse/react-native'
import ParseReact from 'parse-react/react-native'
const FBSDK = require('react-native-fbsdk');
const { 
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} = FBSDK;

const register = async (data)=>{
    console.log('called', data);
    const user = new Parse.User();
    for(let key in data){
        if (key != 'avatar'){
            user.set(key, data[key])
        }
    }
    if(data['avatar']){
        const name = data['username'] + '.jpg';
        const parseFile = new Parse.File(name, {base64: data['avatar']}, 'image/png');
        parseFile.save().then(function(){
            const url = parseFile.url();
            alert(url)
            user.set('image', url);
            user.set('password', 'mypassword')
            try {
                user.signUp();
            } catch (error) {
                console.log("Error: ", error.message );
            }
        },
        function(error){
            console.log(error);
        });
    }else{
        user.set('password', 'mypassword')
        try {
            await user.signUp();
        } catch (error) {
            console.log("Error: ", error.message );
        }
    }
    
    
}

const fblogin = async (param) => {
    const result = await LoginManager.logInWithReadPermissions(['email', 'user_friends']);
    if(result.isCancelled){
        console.log('login was cancelled')
    }else{
        console.log(result);
        const data = await AccessToken.getCurrentAccessToken();
        console.log(data);
        const authData = {
            id:data.userID,
            access_token: data.accessToken,
            expiration_data: data.expirationTime,
            username: 'username'
        }
        Parse.FacebookUtils.logIn(authData,{
            success: (user) => {
                console.log("user~~~~",user);
                if(user.existed()){
                    console.log("User Already Logged In",param)
                    param.navigation.navigate('bottega');
                    
                }else{
                    const infoRequest = new GraphRequest(
                        '/me?fields=id,name,email',
                        null,
                        (error, result) => {
                            console.log('fetch', result);
                            if(error){
                                console.log(error);
                            }else{
                                const userId = {
                                    className: '_User',
                                    objectId: user.id
                                }
                                const query = new Parse.Query(Parse.User);
                                console.log('id', user.id);
                                query.equalTo("objectId", user.id);

                                query.find({
                                    success:function(users){
                                        console.log('user found', users[0]);
                                        users[0].set("username", result.name);
                                        users[0].set("email",result.email);
                                        users[0].save(null, {
                                            success: function(){
                                                console.log("save success.");
                                                return(true);
                                            },
                                            error: function(){
                                               console.log("save failed.");
                                            }
                                         });
                                    },
                                    error: function(error, updated){
                                        console.log("find-error",error);
                                    }
                                })

                            }
                        }
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            error: (user,error) => {
                console.log('Error', error.message);
                console.log(user)
            }
        });

    }
}
export {
    register, fblogin
}