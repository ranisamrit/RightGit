import React, {Component} from 'react';
import { Icon, Input, Button, SocialIcon} from 'react-native-elements';
import groupsix from '../src/Component/Img/MentOeAssetsicons/Groupsix.png';
import Lock from '../src/Component/Img/lock.png';
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
      
      images: [
        require('../src/Component/Img/MentOeAssetsicons/Groupsix.png'),    
        require('../src/Component/Img/MentOeAssetsicons/Groupsix.png'),   
        require('../src/Component/Img/MentOeAssetsicons/Groupsix.png'),       
      ]
    }
 
    
 
   
 
   
 
         
    
       
  }
  render() {
    
  return (

<View style={style.container}>

<SliderBox style={{
     
     width: 300, 
     height: 270,
     marginTop:90,
     marginBottom:110,
     marginLeft:30,
     paddingLeft:10,
     paddingRight:10,
     paddingBottom:10,
     paddingTop:10
   }}
  images={this.state.images}
  sliderBoxHeight={200}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#e9967a"
  inactiveDotColor="#90A4AE"
/>
           


<TouchableOpacity
                      style={style.userBtn}
                      // onPress = {() => {this.setState({ isVisible: false})}}
                    >
                      <Text style={style.btnTxt}>Get Started</Text>
                    </TouchableOpacity>
                    
           
                   
      {/* <Footer style={style.Footer}>
      <Image
              source={Lock}
              style={{ width: 17,height:18
             }}
     />
          <FooterTab >
          
          <Image
              source={Lock}
              style={{ width: 17,height:18
             }}
     />

          
          </FooterTab>
        </Footer> */}
      </View>
               

     
   
  );
              }
};

export default SignIn;
const style = StyleSheet.create({
    container:{
        backgroundColor:"#a52a2a",
        height:"100%",
        marginBottom:10,
        
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        width:160,
        height:26,
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
        color: "#e9967a",
    
      },
      userBtn: {
        backgroundColor: "#800000",
        textAlign: 'center',
        borderRadius: 10,
       marginLeft:76,
       marginRight:80,
        marginTop:80,
     paddingBottom:10,
     paddingTop:10,
     paddingLeft:10,
     paddingRight:10,
    borderColor:"#ff4500",
    borderWidth:1
      },
    //   Footer:{
    //       marginTop:200,
    //      backgroundColor:"#fff"
    //   }
 
 
});






 