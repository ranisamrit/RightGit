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
  Divider,
  
} from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
import Search from '../assets/SearchIcon.png';
import {  Input,SocialIcon,Icon,Header} from 'react-native-elements';
import Path from '../assets/Path.png';
const InvalidEntryId = ({navigation}) => {
   
   
return (
          
       
           

<View style = {styles.container}>

             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
             <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('Pending')
           }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Back
          </Text>
            

          <Card
style={{
// elevation: 24,
borderRadius: 20,
borderColor:"#602F56",
borderWidth:1,
marginTop: 10,
backgroundColor: '#fafcff',

marginLeft: 18,
// marginRight:-48,
height:120,
width:"90%",

}}>
     
<View>
<Card.Content>
<Title style={{color:"#602F56",fontSize:16,textAlign:"center",
fontFamily:"normal normal 600 16px/20px Inter",paddingBottom:3,paddingTop:5,fontWeight:"bold"}}>Pickup ID</Title>

<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,}} />

<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:10,marginRight:150}}>Consignor </Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:5,marginRight:150}}>Consignor Name</Text>

<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:-49,marginLeft:150}}>Origin City</Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:5,marginLeft:150}}>Origin City</Text>

<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />

</Card.Content>

</View>
</Card>

<View style={{marginTop:5}}>
<Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",right:72,paddingTop:20,
}}>18/02/2020,12:10</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",right:40}}>Consignment Connected</Text>   

<Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginRight:130,paddingTop:20,
}}>18/02/2020,12:10pm</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",right:60}}>Lorry ID Generated</Text>  
        
        

<Card style={{width:90,height:35,left:70,backgroundColor:"#D3ACB499",top:5}}> 
  <Text style={{alignSelf:"center",fontSize:13,top:6}}>Lorry ID</Text>
</Card>
<Card style={{width:90,height:35,left:70,backgroundColor:"#D3ACB499",top:10}}> 
  <Text style={{lignSelf:"center",fontSize:13,top:6,left:20}}>Lorry ID</Text>
</Card>



<Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",top:30,right:62
}}>18/02/2020,12:10pm</Text>
<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",top:30,right:62}}>Vahicle assigned</Text>            
        
        <Card style={{width:95,height:35,left:70,backgroundColor:"#D3ACB499",top:34}}> 
  <Text style={{alignSelf:"center",fontSize:13,top:6}}>Vehical No.</Text>
</Card>
<Card style={{width:95,height:35,left:162,backgroundColor:"#D3ACB499",bottom:1}}> 
  <Text style={{lignSelf:"center",fontSize:13,top:6,left:5}}>MH12QW4655</Text>
</Card>
<Card style={{width:95,height:35,left:70,backgroundColor:"#D3ACB499",top:10}}> 
  <Text style={{alignSelf:"center",fontSize:13,top:6}}>Driver No.</Text>
</Card>
<Card style={{width:95,height:35,left:162,backgroundColor:"#D3ACB499",bottom:25}}> 
  <Text style={{alignSelf:"center",fontSize:13,top:6,left:1}}>7219424851</Text>
</Card>






        <Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",bottom:5,right:59
}}>18/02/2020,12:10pm</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",bottom:5,right:33}}>Pickup Request Received</Text>  
        

        <Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:1,marginRight:37}}></Text>      
        </View>


        <View style={styles.MainContainer}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
         
            // onPress={() => navigation.navigate("ScreenDetils")}
           
       >
 
            <Text style={styles.TextStyle}>Edit Details</Text>
             </TouchableOpacity>
           </View>
           
            
           <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            navigation.navigate('ReschedulePickup')}
           
       >
 
            <Text style={styles.TextStyle1}>Reschedule Pickup</Text>
          
             </TouchableOpacity>
           </View>

           </View>
  );
  }
   export default InvalidEntryId;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  bottom:15
  },
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    top:10,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56',
    top:60
  },
 
  TextStyle1:{
    color:'#602F56',
    textAlign:'center',
    fontWeight:"bold",
    fontSize:14,
    fontFamily: "normal normal normal 16px/20px Inter",
   
     
  }, 
 
  SubmitButtonStyle: {
    width:"90%",
    height: 48,
      top:50,
    paddingTop:10,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle:{
    color:'#602F56',
    textAlign:'center',
    fontWeight:"bold",
    fontSize:14,
    fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 

});