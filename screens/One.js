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
// import * as Animatable from 'react-native-animatable';
import Search from '../assets/SearchIcon.png';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import filter from '../assets/filter.png';
const One = ({navigation}) => {
   
   
  

  
      return (
          
       
           

<View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
             <View style={{ flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
           
             
        </View>
            
           <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <TouchableOpacity 
          activeOpacity = { .5 }
         // onPress={() => navigation.navigate("SignUpScreen")}
           >
          <Card style={{bottom:50,
                          elevation: 5,  
                          borderRadius:100,
                          alignSelf:"center",  
              width:42,
              height:42,
              backgroundColor: 'white',
              alignSelf:"center"}}>
                             <Image
                          style={{ width: 100, height: 25,right:29,top:8,}}
                          source={filter}
                          resizeMode='contain'
                        />
                         </Card>
           </TouchableOpacity>

           
           <View >
           <Card 
            
            style={{
            // elevation: 24,
            borderRadius: 15,
            borderColor:"#ECECEC",
            borderWidth:1,
            bottom: 46,
            backgroundColor: '#fafcff',
            
            // marginLeft: 18,
            // marginRight:-48,
            height:100,
            width:"100%",
            }}>
                 
            <View>
             <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:130,fontWeight:"bold"}}>Destination City</Text>
            </View>
            <View style={{marginTop:70,width:"100%",elevation: 20, }}>
                
            <Card style={{
            elevation: 24,
            borderRadius: 5,
            borderColor:"#ECECEC",
            borderWidth:1,
            bottom:60,
            backgroundColor: '#FFFFFF',
            
            marginLeft: 18,
            // marginRight:-48,
            height:"110%",
            width:"90%",
            
            }}>
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,right:80}}>Destination City</Text>
            
            </Card>
            </View>
            
            </Card>
            </View>


<View style={{marginTop:10}}>


            <Card 
            
            style={{
            // elevation: 24,
            borderRadius: 15,
            borderColor:"#ECECEC",
            borderWidth:1,
            bottom: 50,
            backgroundColor: '#fafcff',
            
            // marginLeft: 18,
            // marginRight:-48,
            height:100,
            width:"100%",
            }}>
                 
            <View>
             <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,right:80,fontWeight:"bold"}}>Pickup City</Text>
            </View>
            <View style={{marginTop:70,width:"100%",elevation: 20, }}>
                
            <Card style={{
            elevation: 24,
            borderRadius: 5,
            borderColor:"#ECECEC",
            borderWidth:1,
            bottom:60,
            backgroundColor: '#FFFFFF',
            
            marginLeft: 18,
            // marginRight:-48,
            height:"110%",
            width:"90%",
            
            }}>
            <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
            fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,right:90}}>Pickup City</Text>
            
            </Card>
            </View>
            
            </Card>
            </View>

            <View style={{marginTop:10}}>


<Card 

style={{
// elevation: 24,
borderRadius: 15,
borderColor:"#ECECEC",
borderWidth:1,
bottom: 55,
backgroundColor: '#fafcff',

// marginLeft: 18,
// marginRight:-48,
height:100,
width:"100%",
}}>
     
<View>
 <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,right:90,fontWeight:"bold"}}>Consignor</Text>
</View>
<View style={{marginTop:70,width:"100%",elevation: 20, }}>
    
<Card style={{
elevation: 24,
borderRadius: 5,
borderColor:"#ECECEC",
borderWidth:1,
bottom:60,
backgroundColor: '#FFFFFF',

marginLeft: 18,
// marginRight:-48,
height:"110%",
width:"90%",

}}>
<Text style={{color:"#454F63",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,right:70}}>Consignor Name</Text>

</Card>
</View>

</Card>
</View>

<View style={{marginTop:10}}>


<Card 

style={{
// elevation: 24,
borderRadius: 15,
borderColor:"#ECECEC",
borderWidth:1,
bottom: 60,
backgroundColor: '#fafcff',

// marginLeft: 18,
// marginRight:-48,
height:100,
width:"100%",
}}>
     
<View>
 <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,right:90,fontWeight:"bold"}}>Consignee</Text>
</View>
<View style={{marginTop:70,width:"100%",elevation: 20, }}>
    
<Card style={{
elevation: 24,
borderRadius: 5,
borderColor:"#ECECEC",
borderWidth:1,
bottom:60,
backgroundColor: '#FFFFFF',

marginLeft: 18,
// marginRight:-48,
height:"110%",
width:"90%",

}}>
<Text style={{color:"#454F63",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:7,right:90}}>Consignee</Text>

</Card>
</View>

</Card>
</View>

<ScrollView></ScrollView>




     
  
        
        <View style={{flex:1,marginTop:10,justifyContent:"center"}}>
 <View style={styles.MainContainer}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
         
            onPress={() => navigation.navigate("ScreenDetils")}
           
       >
 
            <Text style={styles.TextStyle}>Apply</Text>
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
 
            <Text style={styles.TextStyle1}>Cancel</Text>
          
             </TouchableOpacity>
           </View>
       </View> 
   

</Animatable.View>

           </View>
    );
};

export default One;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    SubmitButtonStyle: {
      width:"30%",
      height: 40,
      marginTop:-10,
      paddingTop:10,
      paddingBottom:15,
      marginLeft:20,
      marginRight:20,
      backgroundColor:'#602F56',
      borderRadius:15,
      borderWidth: 1,
      borderColor: '#602F56',
      bottom:43
    },
   
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:"bold",
        fontSize:14,
        fontFamily: "normal normal normal 16px/20px Inter",
    },
  
  
   
    SubmitButtonStyle1: {
      width:"30%",
      height: 40,
      // marginTop:10,
      bottom:40,
      left:110,
      paddingTop:10,
      paddingBottom:15,
      marginLeft:20,
      marginRight:20,
      backgroundColor:'transparent',
      borderRadius:15,
      borderWidth: 1,
      borderColor: '#602F56',
      bottom:52
    },
   
    TextStyle1:{
        color:'#602F56',
        textAlign:'center',
        fontWeight:"bold",
        fontSize:14,
        fontFamily: "normal normal normal 16px/20px Inter",
       
    },
    footer: {
      top:35,
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#D3ACB4F2',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        left:30
    },
    // action: {
    //     flexDirection: 'row',
    //     marginTop: 10,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#f2f2f2',
    //     paddingBottom: 5
    // },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
