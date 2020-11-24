// import React from 'react';
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     TextInput,
//     Platform,
//     StyleSheet ,
//     StatusBar,
//     Alert
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

// import { useTheme } from 'react-native-paper';

// import { AuthContext } from '../components/context';

// import Users from '../model/users';

// const SignInScreen = ({navigation}) => {

//     const [data, setData] = React.useState({
//         username: '',
//         password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         isValidUser: true,
//         isValidPassword: true,
//     });

//     const { colors } = useTheme();

//     const { signIn } = React.useContext(AuthContext);

//     const textInputChange = (val) => {
//         if( val.trim().length >= 4 ) {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: true,
//                 isValidUser: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: false,
//                 isValidUser: false
//             });
//         }
//     }

//     const handlePasswordChange = (val) => {
//         if( val.trim().length >= 8 ) {
//             setData({
//                 ...data,
//                 password: val,
//                 isValidPassword: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 password: val,
//                 isValidPassword: false
//             });
//         }
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const handleValidUser = (val) => {
//         if( val.trim().length >= 4 ) {
//             setData({
//                 ...data,
//                 isValidUser: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 isValidUser: false
//             });
//         }
//     }

//     const loginHandle = (userName, password) => {

//         const foundUser = Users.filter( item => {
//             return userName == item.username && password == item.password;
//         } );

//         if ( data.username.length == 0 || data.password.length == 0 ) {
//             Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
//                 {text: 'Okay'}
//             ]);
//             return;
//         }

//         if ( foundUser.length == 0 ) {
//             Alert.alert('Invalid User!', 'Username or password is incorrect.', [
//                 {text: 'Okay'}
//             ]);
//             return;
//         }
//         signIn(foundUser);
//     }

//     return (
//       <View style={styles.container}>
//           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
//         <View style={styles.header}>
//             <Text style={styles.text_header}>Welcome!</Text>
//         </View>
//         <Animatable.View 
//             animation="fadeInUpBig"
//             style={[styles.footer, {
//                 backgroundColor: colors.background
//             }]}
//         >
//             <Text style={[styles.text_footer, {
//                 color: colors.text
//             }]}>Username</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color={colors.text}
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Username"
//                     placeholderTextColor="#666666"
//                     style={[styles.textInput, {
//                         color: colors.text
//                     }]}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                     onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
//                 />
//                 {data.check_textInputChange ? 
//                 <Animatable.View
//                     animation="bounceIn"
//                 >
//                     <Feather 
//                         name="check-circle"
//                         color="green"
//                         size={20}
//                     />
//                 </Animatable.View>
//                 : null}
//             </View>
//             { data.isValidUser ? null : 
//             <Animatable.View animation="fadeInLeft" duration={500}>
//             <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
//             </Animatable.View>
//             }
            

//             <Text style={[styles.text_footer, {
//                 color: colors.text,
//                 marginTop: 35
//             }]}>Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color={colors.text}
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Password"
//                     placeholderTextColor="#666666"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={[styles.textInput, {
//                         color: colors.text
//                     }]}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handlePasswordChange(val)}
//                 />
//                 <TouchableOpacity
//                     onPress={updateSecureTextEntry}
//                 >
//                     {data.secureTextEntry ? 
//                     <Feather 
//                         name="eye-off"
//                         color="grey"
//                         size={20}
//                     />
//                     :
//                     <Feather 
//                         name="eye"
//                         color="grey"
//                         size={20}
//                     />
//                     }
//                 </TouchableOpacity>
//             </View>
//             { data.isValidPassword ? null : 
//             <Animatable.View animation="fadeInLeft" duration={500}>
//             <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
//             </Animatable.View>
//             }
            

//             <TouchableOpacity>
//                 <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
//             </TouchableOpacity>
//             <View style={styles.button}>
//                 <TouchableOpacity
//                     style={styles.signIn}
//                     onPress={() => {loginHandle( data.username, data.password )}}
//                 >
//                 <LinearGradient
//                     colors={['#08d4c4', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={[styles.textSign, {
//                         color:'#fff'
//                     }]}>Sign In</Text>
//                 </LinearGradient>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('SignUpScreen')}
//                     style={[styles.signIn, {
//                         borderColor: '#009387',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                 >
//                     <Text style={[styles.textSign, {
//                         color: '#009387'
//                     }]}>Sign Up</Text>
//                 </TouchableOpacity>
//             </View>
//         </Animatable.View>
//       </View>
//     );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#009387'
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingBottom: 50
//     },
//     footer: {
//         flex: 3,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 30
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     actionError: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#FF0000',
//         paddingBottom: 5
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     errorMsg: {
//         color: '#FF0000',
//         fontSize: 14,
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     }
//   });



import React, { Component,useState } from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  
  ActivityIndicator,
 StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  
} from 'react-native';

import {
  TouchableRipple,
  Switch,
  Title,
  Card,
  TextInput,
  Paragraph,
  Button,
  Avatar,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Logo from './assets/Layer.png';
import {  Input,SocialIcon,Icon} from 'react-native-elements';


const SelectionScreen = ({navigation}) => {
   
   
  
      return (
          
       
             <View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
             <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Logo}
            style={styles.logo}
            resizeMode='center'
            />
               <Text style= {styles.text}>Enriching Supply Chain Solutions</Text>
        </View>
            <TouchableOpacity 
          activeOpacity = { .5 }
         
            onPress={() => navigation.navigate("SignUpScreen")}
           
       >
           <Text style= {styles.text1}>Track your Package</Text>
           </TouchableOpacity>
           <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            
           
     
  
        
        <View style={{flex:1,marginTop:10,justifyContent:"center"}}>
 <View style={styles.MainContainer}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
         
            onPress={() => navigation.navigate("StaffDashboard")}
           
       >
 
            <Text style={styles.TextStyle}>Staff Login</Text>
             </TouchableOpacity>
           </View>

            
           <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            navigation.navigate('Customerlogin')}
           
       >
 
            <Text style={styles.TextStyle1}>Customer Login</Text>
          
             </TouchableOpacity>
           </View>
       </View> 
   

</Animatable.View>

           </View>
      );
   }
   export default SelectionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
  },
  text:{
    fontFamily: "normal normal normal 17px/20px Inter",
    fontSize:15,
    color:"#602F56",
    top:240,
    left:15,
    // marginLeft:80,
    textAlign:'center',
    // paddingTop:100,
    // paddingBottom:100
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
  },
  text1:{
    fontFamily: "normal normal 600 14px/17px Inter",
    fontSize:16,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    paddingTop:150,
    paddingBottom:60,
    marginTop:10,
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
  },
  
  SubmitButtonStyle: {
    width:"90%",
    height: 48,
    marginTop:-10,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#602F56',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
  },


 
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    marginTop:10,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle1:{
      color:'#602F56',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop:100,
   
//    marginBottom:100
},
// text:{
//   fontFamily: "normal normal normal 17px/20px Inter",
//   fontSize:15,
//   color:"#602F56",
//   // marginLeft:80,
//   textAlign:'center',
//   // paddingTop:-30,
//   // paddingBottom:200,
//   marginBottom:-260,
// left:25
//   // top: "94px",
//   // left: "98px",
//   // width: "212px",
//   // height: "26px",
// },
logo: {
  width: "100%",
  height:"100%",
  marginBottom:-300,
  marginTop:-250,
  // paddingBottom:40,
},
});