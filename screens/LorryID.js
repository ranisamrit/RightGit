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
  Divider
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
import Path from '../assets/Path.png';

const LorryID = ({navigation}) => {
  // const BasicTimeLine = () => {
  //   const data = [
  //     {
  //       time: '09:00',
  //       title: 'Event 1',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '10:45',
  //       title: 'Event 2',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '12:00',
  //       title: 'Event 3',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '14:00',
  //       title: 'Event 4',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //     {
  //       time: '16:30',
  //       title: 'Event 5',
  //       description:
  //         'Lorem Ipsum is simply dummy text of the printing.',
  //     },
  //   ];
   return (
          
       
             <View style = {styles.container}>
              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>

              <TouchableOpacity
         
         onPress={() =>
         //   this.callApi()
             // this.props.navigation.navigate('InvoiceDetils')
             navigation.navigate('TrackBarcode')
          }
      >
            <Image
               source={Path}
               style={{ width: 20, height: 20,marginTop:15,left:30
             }}
             />
             </TouchableOpacity>
             <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter" }}>
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
height:220,
width:"90%",

}}>
     
<View>
<Card.Content>
<Title style={{color:"#602F56",fontSize:16,textAlign:"center",
fontFamily:"normal normal 600 16px/20px Inter",paddingBottom:3,paddingTop:5,fontWeight:"bold"}}>LORRY ID</Title>

<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,}} />

<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:10,marginRight:150}}>Consignor </Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:5,marginRight:150}}>Consignor Name</Text>

<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:-49,marginLeft:150}}>Consignee</Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:5,marginLeft:150}}>Consignee Name</Text>

<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />
<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:10,marginRight:150,paddingTop:10,}}>Origin</Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:1,marginRight:150}}>Origin City</Text>

<Text style={{color:"#959DAD",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:-45,marginLeft:150}}>Destination</Text>

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:4,marginLeft:150}}>Destination city</Text>
<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />

</Card.Content>

</View>
</Card>
<Card
style={{
paddingTop:10,
borderRadius: 24,
marginTop: 20,
backgroundColor: '#D3ACB4B3',
borderRadius: 10,
borderColor:"#ECECEC",
borderWidth:1,
marginLeft: 18,
// marginRight:-48,
height:90,
width:"90%",

}}>
<View style={{paddingRight:10}}>
<Card.Content>
<Text style={{color:"#FFFFFF",fontSize:12,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginTop:10,marginRight:150}}>Project Name</Text>

<Text style={{color:"#313450",fontSize:13,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:5,marginRight:158}}>Total Pcs:#</Text>

<Text style={{color:"#FFFFFF",fontSize:12,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:-39,marginLeft:125}}>Last Status Update</Text>

<Text style={{color:"#454F63",fontSize:13,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:5,marginLeft:150}}>18/02/2020,12:10 pm</Text>

</Card.Content>
</View>
</Card>

<Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginRight:200,paddingTop:20,
}}>Remark</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:1,marginRight:115}}>Last Remark added</Text>   

<Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginRight:130,paddingTop:20,
}}>18/02/2020,12:10pm</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:1,marginRight:37}}>Consignment Pickup Completed</Text>  
        
        <Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginRight:130,paddingTop:20,
}}>18/02/2020,12:10pm</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:1,marginRight:37}}>Consignment Pickup Completed</Text>            
        
        <Text style={{color:"#959DAD",fontSize:11,textAlign:"center",
fontFamily:"normal normal normal 15px/19px Inter",marginRight:130,paddingTop:20,
}}>18/02/2020,12:10pm</Text>

<Text style={{color:"#313450",fontSize:14,textAlign:"center",
fontFamily:" normal normal medium 16px/20px Inter",marginTop:1,marginRight:37}}>Consignment Pickup Completed</Text>  
        
        
        
        <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('InvoiceDetils')
           }
       >
 
            <Text style={styles.TextStyle1}>View Invoice</Text>
          
             </TouchableOpacity>
           </View>   
        
        
        
           </View>
      );
   }
  
   export default LorryID;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5F5F5"
       
      },
      
      
            SubmitButtonStyle1: {
              width:"90%",
              height: 48,
              marginTop:25,
              paddingTop:10,
              paddingBottom:30,
              marginLeft:20,
              marginRight:20,
              backgroundColor:'transparent',
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#602F56',
              top:40
            },
           
            TextStyle1:{
                color:'#602F56',
                textAlign:'center',
                fontWeight:"bold",
                fontSize:14,
                fontFamily: "normal normal normal 16px/20px Inter",
               
            }, 
      
      
     
      

});