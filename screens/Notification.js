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
import {  Input,SocialIcon,Icon} from 'react-native-elements';
import Path from '../assets/Path.png';
const Notification = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
              <TouchableOpacity
         
          // onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              // navigation.navigate('DrawerContent')
          //  }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 16,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Notification
          </Text>
<ScrollView vartical={true}>

        
<Card
style={{
elevation: 24,
borderRadius: 20,
marginTop: 30,
backgroundColor: '#602F56',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
alignSelf:"center",
height:130,
width:"95%",

}}>
<View>
<Card.Content>
<Title style={{color:"#FFFFFF",fontSize:20,textAlign:"center",
fontFamily:"normal normal normal 20px/24px Inter",paddingBottom:3}}>Lorry ID</Title>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>Updated Status Content needs to be shown</Text>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>18/09/2020,12:10 pm</Text>
</Card.Content>
</View>
</Card>

<Card
style={{
elevation: 24,
borderRadius: 20,
borderColor:"#602F56",
borderWidth:1,
marginTop: 30,
backgroundColor: '#FFFFFF',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
alignSelf:"center",
height:130,
width:"95%",

}}>
<View>
<Card.Content>
<Title style={{color:"#602F56",fontSize:20,textAlign:"center",
fontFamily:"normal normal normal 20px/24px Inter",paddingBottom:3}}>Other News</Title>
<Text style={{color:"#602F56",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>News Content</Text>
<Text style={{color:"#602F56",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>18/09/2020,12:10 pm</Text>
</Card.Content>
</View>
</Card>
<Card
style={{
elevation: 24,
borderRadius: 20,
marginTop: 30,
backgroundColor: '#602F56',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
alignSelf:"center",
height:130,
width:"95%",

}}>
<View>
<Card.Content>
<Title style={{color:"#FFFFFF",fontSize:20,textAlign:"center",
fontFamily:"normal normal normal 20px/24px Inter",paddingBottom:3}}>Lorry ID</Title>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>Updated Status Content needs to be shown</Text>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>18/09/2020,12:10 pm</Text>
</Card.Content>
</View>
</Card>

<Card
style={{
elevation: 24,
borderRadius: 20,
marginTop: 30,
backgroundColor: '#602F56',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
alignSelf:"center",
height:130,
width:"95%",

}}>
<View>
<Card.Content>
<Title style={{color:"#FFFFFF",fontSize:20,textAlign:"center",
fontFamily:"normal normal normal 20px/24px Inter",paddingBottom:3}}>Lorry ID</Title>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>Updated Status Content needs to be shown</Text>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>18/09/2020,12:10 pm</Text>
</Card.Content>
</View>
</Card>


<Card
style={{
elevation: 24,
borderRadius: 20,
marginTop: 30,
backgroundColor: '#602F56',
padding: 18,
// marginLeft: 18,
// marginRight:-48,
alignSelf:"center",
height:130,
width:"95%",

}}>
<View>
<Card.Content>
<Title style={{color:"#FFFFFF",fontSize:20,textAlign:"center",
fontFamily:"normal normal normal 20px/24px Inter",paddingBottom:3}}>Lorry ID</Title>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>Updated Status Content needs to be shown</Text>
<Text style={{color:"#FFFFFF",fontSize:13,textAlign:"center",
fontFamily:"normal normal normal 11px/24px Inter",marginBottom:10}}>18/09/2020,12:10 pm</Text>
</Card.Content>
</View>
</Card>
</ScrollView>
<View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          // onPress={() =>
          // //   this.callApi()
          //     // this.props.navigation.navigate('InvoiceDetils')
          //     navigation.navigate('InvoiceDetils')
          //  }
       >
 
            <Text style={styles.TextStyle1}>Dismiss All</Text>
          
             </TouchableOpacity>
           </View>   

           </View>
      );
   }
   export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
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
      fontSize:16,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  },
  

});