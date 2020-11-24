import React, {Component} from 'react';
import { Icon, Input, Button, SocialIcon,} from 'react-native-elements';
import { ListItem, CheckBox, Body  } from 'native-base';
import Lock from '../src/Component/Img/lock.png';
import Man from '../src/Component/Img/MentOeAssetsicons/Groupman.png';
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
              source={Man}
              style={{ width: 15,height:20
             }}
            />
            }
            placeholder="Email"
            inputContainerStyle={style.input}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
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
            placeholderTextColor="grey"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            />
             <View >
                                {/* <Input type="checkbox" checked={this.isChecked} 
                                name="RememberMe" onChange={this.onChangeCheckbox} />
                                <Text>Remember me</Text> */}
                                
                     
            </View> 
           
           
           
            
            <TouchableOpacity>
            <CheckBox style={style.btnTxt3}  checked={this.state.checked} />
            <Text style={style.btnTxt1}>Remember me</Text>
            </TouchableOpacity>
          
            
           
           <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgotpassword')}
                >
                  
                  <Text style={style.btnTxt}>Forgot  Password ?</Text>
                </TouchableOpacity>
       
                <Button
            title="Login"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#696969',
              borderRadius: 10,
            
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 15,color: '#c0c0c0'}}
            containerStyle={{ height: 50, width: 300,marginTop:70,marginLeft:30,marginRight:500,paddingLeft:25,paddingRight:25}}
            onPress={() => this.props.navigation.navigate('Signup')}
            underlayColor="transparent"
            />
            <Text style={style.btnTxt2}>or Login with social account</Text>


            
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
            
          
   <Text style={style.btnTxt4}>Don't have an account? Sign Up</Text>        

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
    marginLeft:30,
    marginRight:30,
  
  
  },
  btnTxt1:{
    
flexDirection:"row",
justifyContent:"space-between",
  marginBottom:-30,
  marginTop:40,
    marginLeft:70,
    fontSize:13
  
  },
  btnTxt3:{
flex:1,
flexDirection:"row",
justifyContent:"space-between",
marginTop:60,
marginBottom:-60,
marginLeft:30,
marginRight:10,
paddingTop:4,
paddingBottom:10,
backgroundColor:"#fff",
opacity: 0.4

  },

  btnTxt2:{
    color:"#808080",
    marginLeft:83,
    padding:"4%",
    fontSize:14,
    marginTop:-13,
    marginBottom:26,
    
  },
  btnTxt:{
    marginLeft:200,
   marginTop:13,
  marginBottom:10,
  fontSize:13
  },
  btnTxt4:{
    marginTop:230,
    marginLeft:95,
    fontSize:13,
    fontWeight:"bold",
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
  ImageIconStyle1: {
    padding: 10,
   marginTop:10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode : 'stretch',
   
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




 