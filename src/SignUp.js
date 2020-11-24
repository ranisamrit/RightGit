
import React, {Component} from 'react';
import { Icon, Input, Button, SocialIcon} from 'react-native-elements';
import man from '../src/Component/Img/MentOeAssetsicons/Groupman.png';
import Mail from '../src/Component/Img/mail.png';
import Phone from '../src/Component/Img/phone.png';
import Lock from '../src/Component/Img/lock.png';
import Hide from '../src/Component/Img/hide.png';
import Otpp from '../src/Otp';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  Image as Img,

  Image,
} from 'react-native';
// import { WaveShape } from '../src/Component/waveshap';
import { color } from 'react-native-reanimated';


class SignIn extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    
 
    this.state = {
      
        isChecked: false,
    }
 
    
 
   
 
   
 
         
    
       
  }
  render() {
    // const xml = `<Svg.Path d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z" // put your path here fill="blue" stroke="blue" /> </Svg> `;
  return (
//     <View style={{marginTop:200}}>
// {/* <SvgXml xml={xml} style={style.svg} width="700" height="400" /> */}
// <WaveShape style={{ position: "absolute" ,top: 0, zIndex: 1 }}></WaveShape>
<View style={style.container}>
            
            <View style={style.wrapper}>
            <Input
            leftIcon={
              <Image
              source={Mail}
              style={{ width: 15,height:15
             }}
            />
            }
            placeholder=" Your Email"
            inputContainerStyle={style.input}
            placeholderTextColor="#c0c0c0"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            
            />
            <Input
            leftIcon={
              <Image
              source={man}
              style={{width: 10,height:14
             }}
            />
            }
            inputContainerStyle={style.input}
            placeholderTextColor="#c0c0c0"
            placeholder="User Name"
            autoCapitalize="none"
            secureTextEntry={false}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            />
            <Input
            leftIcon={
              <Image
              source={Phone}
              style={{width: 15,height:15
             }}
            />
            }
            inputContainerStyle={style.input}
            placeholderTextColor="#c0c0c0"
            placeholder="Phone"
            autoCapitalize="none"
            secureTextEntry={false}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            />

            <Input
            leftIcon={
              <Image
              source={Lock}
              style={{ width: 17,height:18
             }}
            />
            
            
            }
            inputContainerStyle={style.input}
            placeholderTextColor="#c0c0c0"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
             />
 <Image
              source={Hide}
              style={{ width: 19,height:20,marginLeft:300,marginTop:20
             }}
            />



<Text style={style.btnTxt2}>By signing up your agree to our Terms of Use </Text>
             
 <Text style={style.btnTxt3}> and Privacy Policy.</Text> 
       
 <Button
            title="SignUp"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#696969',
              borderRadius: 10,
            
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 15,color: '#c0c0c0'}}
            containerStyle={{ height: 50, width: 300,marginTop:70,marginLeft:30,marginRight:500,paddingLeft:25,paddingRight:25}}
            onPress={() => this.props.navigation.navigate('Otpp')}
            underlayColor="transparent"
            />
            <Text style={style.btnTxt1}>or Login with social account</Text>


            
            <View style={style.MainContainer1}>
 
 <TouchableOpacity style={style.FacebookStyle1} activeOpacity={0.5}>

    <Image 
 source={require('../src/Component/Img/facbook.png')} 
     style={style.ImageIconStyle1} 
     />



    <Text style={style.TextStyle1}>  Facebook  </Text>

  </TouchableOpacity>
  </View>
   <View style={style.MainContainer2}>
  <TouchableOpacity style={style.GooglePlusStyle2} activeOpacity={0.5}>

    <Image 
    source={require('../src/Component/Img/google.png')} 
     style={style.ImageIconStyle2} 
     />

    

    <Text style={style.TextStyle2}> Google  </Text>

  </TouchableOpacity>
  </View> 
   
  
            </View>
            
            <Text style={style.btnTxt}>Already have account? Log In</Text> 
                       
                     
            </View> 

            
        

   
        );
    }
};

export default SignIn;
const style = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
  
//     alignItems:'center',
//   },
 

  button: {
     
    backgroundColor: '#fff',
    width:"90%",
   height:"20%",
    alignItems: 'center',
   paddingTop:50
  
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
 
wrapper:{
},
input: {
  borderWidth: 1,
  borderColor: 'white',
  borderLeftWidth: 0,
 height:"1%",
  backgroundColor: '#dcdcdc',
  marginBottom: -77,
 
  padding:20,
  marginTop:60,
  marginLeft:15,
  marginRight:15,


},
btnTxt:{
marginTop:90,
marginLeft:95,
fontSize:13,
fontWeight:"bold",
},
btnTxt1:{
  color:"#808080",
  marginLeft:85,
  padding:"4%",
  fontSize:13,
  marginTop:-20,
  marginBottom:26,
 
},
btnTxt2:{
  color:"#c0c0c0",
  marginLeft:33,
  paddingBottom:20,
  padding:"4%",
  fontSize:13,
  marginTop:50,
  marginBottom:30,
},

  btnTxt3:{
    marginLeft:130,
    fontSize:12,
    marginTop:-53,
    color:"#c0c0c0",
    
  },
  btnTxt4:{
paddingLeft:100,
marginTop:-3,
fontSize:12,
  },

 
  socialWrapper: {
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft:83,
  },
  MainContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginRight:150,
    width:"70%",
    paddingRight:60,
    marginLeft:-10
  },
  
  
  
  FacebookStyle1: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#fff',
   borderWidth: .5,
   borderColor: '#000',
   height: 40,
   width:"70%",
   borderRadius: 20 ,
   margin: 5,
  
  },
  
  ImageIconStyle1: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 25,
    resizeMode : 'stretch',
    marginLeft:10,
    marginBottom:10
  },
  
  TextStyle1:{
  
   color: "#000",
   marginBottom : 4,
   marginRight :17,
   
  },
  MainContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginRight:150,
    width:"70%",
  
    marginLeft:150,
    marginTop:-10
  },
  GooglePlusStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 20,
    margin: 5,
    height: 40,
    width:"60%",
  },
  
  
  
  ImageIconStyle2: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode : 'stretch',
    marginLeft:15,
    marginBottom:8,
  },
  
  TextStyle2:{
  
   color: "#000",
   marginBottom : 4,
   marginLeft :22,
   
  },
  


});

