// import React from 'react';
// import { 
//     View, 
//     Text, 
//     Button, 
//     TouchableOpacity, 
//     Dimensions,
//     TextInput,
//     Platform,
//     StyleSheet,
//     ScrollView,
//     StatusBar
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

// const SignInScreen = ({navigation}) => {

//     const [data, setData] = React.useState({
//         username: '',
//         password: '',
//         confirm_password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         confirm_secureTextEntry: true,
//     });

//     const textInputChange = (val) => {
//         if( val.length !== 0 ) {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: false
//             });
//         }
//     }

//     const handlePasswordChange = (val) => {
//         setData({
//             ...data,
//             password: val
//         });
//     }

//     const handleConfirmPasswordChange = (val) => {
//         setData({
//             ...data,
//             confirm_password: val
//         });
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const updateConfirmSecureTextEntry = () => {
//         setData({
//             ...data,
//             confirm_secureTextEntry: !data.confirm_secureTextEntry
//         });
//     }

//     return (
//       <View style={styles.container}>
//           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
//         <View style={styles.header}>
//             <Text style={styles.text_header}>Register Now!</Text>
//         </View>
//         <Animatable.View 
//             animation="fadeInUpBig"
//             style={styles.footer}
//         >
//             <ScrollView>
//             <Text style={styles.text_footer}>Username</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Username"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
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

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
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

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Confirm Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Confirm Your Password"
//                     secureTextEntry={data.confirm_secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handleConfirmPasswordChange(val)}
//                 />
//                 <TouchableOpacity
//                     onPress={updateConfirmSecureTextEntry}
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
//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                 </Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
//                 <Text style={styles.color_textPrivate}>{" "}and</Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
//             </View>
//             <View style={styles.button}>
//                 <TouchableOpacity
//                     style={styles.signIn}
//                     onPress={() => {}}
//                 >
//                 <LinearGradient
//                     colors={['#08d4c4', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={[styles.textSign, {
//                         color:'#fff'
//                     }]}>Sign Up</Text>
//                 </LinearGradient>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     onPress={() => navigation.goBack()}
//                     style={[styles.signIn, {
//                         borderColor: '#009387',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                 >
//                     <Text style={[styles.textSign, {
//                         color: '#009387'
//                     }]}>Sign In</Text>
//                 </TouchableOpacity>
//             </View>
//             </ScrollView>
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
//         flex: Platform.OS === 'ios' ? 3 : 5,
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
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
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
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 20
//     },
//     color_textPrivate: {
//         color: 'grey'
//     }
//   });


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
  Alert
} from 'react-native';

import Users from '../model/users';
import {
  TouchableRipple,
  Switch,
  Title,
  Card,
  useTheme,
  TextInput,
  Paragraph,
  Button,
  Avatar,
  
} from 'react-native-paper';
//  import TrackNow from './src/TrackNow';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
import { AuthContext } from '../components/context';
import Scan from '../assets/scan.png';
import Logo from '../assets/Layer.png';

const SignUpScreen = ({navigation}) => {
//   const { signIn } = React.useContext(AuthContext);
  
//   const [data, setData] = React.useState({
//     username: '',
//     password: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//     isValidUser: true,
//     isValidPassword: true,
// });

// const { colors } = useTheme();


// const textInputChange = (val) => {
//     if( val.trim().length >= 4 ) {
//         setData({
//             ...data,
//             username: val,
//             check_textInputChange: true,
//             isValidUser: trueF
//         });
//     } else {
//         setData({
//             ...data,
//             username: val,
//             check_textInputChange: false,
//             isValidUser: false
//         });
//     }
// }

// const handlePasswordChange = (val) => {
//     if( val.trim().length >= 8 ) {
//         setData({
//             ...data,
//             password: val,
//             isValidPassword: true
//         });
//     } else {
//         setData({
//             ...data,
//             password: val,
//             isValidPassword: false
//         });
//     }
// }

// const updateSecureTextEntry = () => {
//     setData({
//         ...data,
//         secureTextEntry: !data.secureTextEntry
//     });
// }

// const handleValidUser = (val) => {
//     if( val.trim().length >= 4 ) {
//         setData({
//             ...data,
//             isValidUser: true
//         });
//     } else {
//         setData({
//             ...data,
//             isValidUser: false
//         });
//     }
// }
//   const loginHandle = (userName, password) => {

//     const foundUser = Users.filter( item => {
//         return userName == item.username && password == item.password;
//     } );

//     // if ( data.username.length == 0 || data.password.length == 0 ) {
//     //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
//     //         {text: 'Okay'}
//     //     ]);
//     //     return;
//     // }

//     if ( foundUser.length == 0 ) {
//         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
//             {text: 'Okay'}
//         ]);
//         return;
//     }
//     signIn(foundUser);
// }

      return (
          
       
             <View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           <Text style= {styles.text}>Track Your Package</Text>
           <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Logo}
            style={{width:"50%",height:"50%",alignSelf:"center",marginTop:-255}}
            resizeMode='center'
            /> 


<Card
      style={{
        elevation: 24,
        borderRadius: 24,
        marginTop: -50,
        backgroundColor: '#fafcff',
        padding: 18,
        alignSelf:"center",
        // marginLeft: 15,
        // marginRight:-48,
        height:192,
        width:"98%",
        
      }}>
        <View style={{flex:1,justifyContent:"space-between",flexDirection:"column",}}>
        <Card.Content>
        <Title style={{color:"#602F56",fontSize:16,textAlign:"center",
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,fontWeight:"bold"}}>Enter the Lorry Number</Title>
         
      </Card.Content>
      
           <TextInput label="Enter ID"
           
          mode="outlined"
          dense={true}
          // ref={textInput.current.clear()}
          theme={{
            colors: {
              primary: '#602F56',
              fontFamily:"normal normal medium 14px/17px Inter"
            },
          }}
          style={{
            borderRadius: 20,
            borderColor: '#00000014',
            borderLeftWidth: 1,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
            borderTopStartRadius: 30,
            borderStyle: 'dashed',
            borderTopColor: '#00000014',
            marginRight:50,
            borderTopEndRadius: 0,
            borderTopWidth: 0,
            borderStartColor: '#00000014',
            borderEndColor: '#00000014',
            borderRightColor: '#00000014',
            borderLeftColor: '#00000014',
            fontSize: 14,
            opacity: 0.9,
            shadowColor: '#00000014',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
          
          />
          <TouchableOpacity  onPress={() => navigation.navigate("scanbarcodeApp")}>
          <Image 
                // animation="bounceIn"
                // duraton="1500"
            source={Scan}
            style={styles.logo}
            resizeMode='center'
            />
            </TouchableOpacity>
      </View>
        </Card>
        <View style={{flex:1,marginTop:50,justifyContent:"center"}}>
 <View style={styles.MainContainer}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
         
           onPress={() => navigation.navigate("LorryID")}
       >
 
            <Text style={styles.TextStyle}>Track Now</Text>
             </TouchableOpacity>
           </View>

            
           <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          // onPress={() =>
          //   this.callApi()
          //     // this.props.navigation.navigate('TabStack')
          //  }
          onPress={() => {loginHandle( 'user1', 'password' )}}
       >
 
            <Text style={styles.TextStyle1}>Sign In</Text>
          
             </TouchableOpacity>
           </View>








          </View> 
   


           </View>
    
      );
   }
// }
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
   flexDirection:"column",
   justifyContent:"center"
  },
  text:{
    
    fontSize:22,
    color:"#602F56",
    // marginLeft:80,
    textAlign:'center',
    paddingTop:100,
    paddingBottom:100,
    // top: "94px",
    // left: "98px",
    // width: "212px",
    // height: "26px",
    fontFamily:"normal normal medium 22px/26px Inter"
  },
  card:{
    width:"90%",
    height:"30%",
    backgroundColor:"#FFFFFF",
    marginLeft:20
   
   },
  textin:{
  //  width:"50%",
  //  height:"30%",
   backgroundColor:"#FFFFFF",
  
  },
  SubmitButtonStyle: {
    width:"90%",
    height: 48,
    marginTop:-1,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#602F56',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#FFFFFF',
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
      color:'#000',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  },
  logo: {
    // flex:1,
    width: 44,
    height:41,
    left:330,
    bottom:50,
    flexDirection:"row",
    
},


});
