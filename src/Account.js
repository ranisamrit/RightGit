import React, {Component} from 'react';
import { Icon, Input, Button, SocialIcon} from 'react-native-elements';
import groupsix from '../src/Component/Img/MentOeAssetsicons/Groupsix.png';
import Path from '../src/Component/Images/Mentoepath/Path.png';
import Profile from '../src/Component/Img/MentoeAssetsOnee/men.jpg'
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
  Image,
  ImageBackground,
  Slider,
  slides
} from 'react-native';
// import { WaveShape } from '../src/Component/waveshap';
import { color } from 'react-native-reanimated';
// import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import {  Footer, FooterTab,} from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
class SignIn extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
    
 
    this.state = {
      
     
    }
 
    
 
   
 
   
 
         
    
       
  }
  render() {
    
  return (

<View style={style.container}>


           
 <Image
              source={Path}
              style={{ width: "100%",height:"150%",backgroundColor:"#000",
             }}
     />


                    
     
      </View>
               

     
   
  );
              }
};

export default SignIn;
const style = StyleSheet.create({
    // container:{
    //     backgroundColor:"#a52a2a",
    //     height:"100%",
    //     marginBottom:10,
        
    // },
    // btnTxt: {
    //     fontSize: 18,
    //     textAlign: 'center',
    //     margin: 10,
    //     width:160,
    //     height:26,
    //     marginTop:5,
    //     marginBottom:5,
    //     marginLeft:10,
    //     color: "#e9967a",
    
    //   },
    //   userBtn: {
    //     backgroundColor: "#800000",
    //     textAlign: 'center',
    //     borderRadius: 10,
    //    marginLeft:76,
    //    marginRight:80,
    //     marginTop:80,
    //  paddingBottom:10,
    //  paddingTop:10,
    //  paddingLeft:10,
    //  paddingRight:10,
    // borderColor:"#ff4500",
    // borderWidth:1
    //   },
      Footer:{
          marginTop:600,
         backgroundColor:"#fff",
        
      }
 
 
});






 