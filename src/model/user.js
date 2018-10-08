import Parse from 'parse/react-native';

class User extends Parse.Object {
    constructor(){
        super('User');
    }

    static register(data) {
        console.log('called');
        let user = new User();
        user.set('username', "TESTNAME");
        user.save()
            .then((user)=>{
                console.log(user)
            },(error)=>{console.log(error)});
        return user;
        
    }


}

export default User