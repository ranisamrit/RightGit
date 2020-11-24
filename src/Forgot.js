import React, {Component} from 'react';
import { Icon, Input, Button, SocialIcon} from 'react-native-elements';
import man from '../src/Component/Img/MentOeAssetsicons/Groupman.png';
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
  Switch,
  Image
} from 'react-native';
// import { WaveShape } from '../src/Component/waveshap';
import { color } from 'react-native-reanimated';
// import Svg, {
//     Circle,
//     Ellipse,
//     G,
//     SvgXml ,
//     Text,
//     TSpan,
//     TextPath,
//     Path,
//     Polygon,
//     Polyline,
//     Line,
//     Rect,
//     Use,
//     Image,
//     Symbol,
//     Defs,
//     LinearGradient,
//     RadialGradient,
//     Stop,
//     ClipPath,
//     Pattern,
//     Mask,
//   } from 'react-native-svg';

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
   
  return (

<View style={style.container}>
            
            <View style={style.wrapper}>


            <Text style={style.btnTxt2}>Forgot Password ?</Text>
            <Text style={style.btnTxt}>Confirm your email and we'll send the instructions.</Text>
            {/* <Text style={style.btnTxt4}>or sign up with social account </Text> */}
            <Input
            leftIcon={
            <Image
              source={man}
              style={{ width: 10,height:14
             }}
            />
         
            }
            placeholder="Your Email"
            inputContainerStyle={style.input}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            />
            
           
                <Button
            title="Reset Password"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#696969',
              borderRadius: 10,
            
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 15, color: '#c0c0c0'}}
            containerStyle={{ height: 50, width: 300,marginTop:150,marginLeft:30,marginRight:500,paddingLeft:25,paddingRight:25}}
            onPress={() => this.props.navigation.navigate('Signup')}
            underlayColor="transparent"
            />
            
            </View>
            
          
                          

            </View> 
        

   
  );
              }
};

export default SignIn;
const style = StyleSheet.create({


 
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
    marginLeft:30,
    marginRight:30,
  
  
  },
  
  btnTxt2:{
    color:"#000000",
    marginLeft:26,
    padding:"4%",
    fontSize:26,
    fontWeight:"bold",
  },
  btnTxt:{
fontSize:15,
paddingLeft:30,
marginLeft:10
  },
  

});






 