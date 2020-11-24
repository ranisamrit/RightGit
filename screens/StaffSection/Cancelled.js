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
// import Search from './assets/SearchIcon.png';
import {  Input,SocialIcon,Icon} from 'react-native-elements';

const Cancelled = ({navigation}) => {
   
   
  

  
      return (
          
       
           

<View style = {styles.container}>
    
  <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
 
  
<ScrollView vartical={true} marginBottom={10}>

  <Card
      style={{
        elevation: 24,
        borderRadius: 12,
        marginTop: 20,
        backgroundColor: '#fafcff',
        padding: 18,
        marginLeft: 18,
        marginRight:-48,
        height:192,
        width:"90%",
        
      }}>
 <View>
 <Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:200,fontWeight:"bold"}}>Lorry ID</Title>


          <Title style={{color:"#EA1D25",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:190,marginTop:-53,fontWeight:"bold",left:60}}>Cancelled</Title>


         <Title style={{color:"#454F63",fontSize:12,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:180,marginTop:-30}}>18/02/2020,12:10 pm</Title>

<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:100,marginTop:-35}}>Origin City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:-35}}>Consignor Name</Title>
<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginBottom:-20}}>Destination City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:5}}>Consignee Name</Title>

        <View style={styles.MainContainer4}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle4}
          activeOpacity = { .10 }
          onPress={() =>
            // this.callApi()
              navigation.navigate('Stafflorryid')
           }
       >
 
            <Text style={styles.TextStyle4}>Details</Text>
          
             </TouchableOpacity>
           </View>  
        </View>

        </Card>
<Card
      style={{
        elevation: 24,
        borderRadius: 12,
        marginTop: 20,
        backgroundColor: '#fafcff',
        padding: 18,
        marginLeft: 18,
        marginRight:-48,
        height:192,
        width:"90%",
        
      }}>
 <View>
 <Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:200,fontWeight:"bold"}}>Lorry ID</Title>


          <Title style={{color:"#EA1D25",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:190,marginTop:-53,fontWeight:"bold",left:60}}>Cancelled</Title>


         <Title style={{color:"#454F63",fontSize:12,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:180,marginTop:-30}}>18/02/2020,12:10 pm</Title>

<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:100,marginTop:-35}}>Origin City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:-35}}>Consignor Name</Title>
<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginBottom:-20}}>Destination City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:5}}>Consignee Name</Title>

        <View style={styles.MainContainer4}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle4}
          activeOpacity = { .10 }
          onPress={() =>
          //   this.callApi()
              navigation.navigate('Stafflorryid')
           }
       >
 
            <Text style={styles.TextStyle4}>Details</Text>
          
             </TouchableOpacity>
           </View>  
        </View>

        </Card>
        <Card
      style={{
        elevation: 24,
        borderRadius: 12,
        marginTop: 20,
        backgroundColor: '#fafcff',
        padding: 18,
        marginLeft: 18,
        marginRight:-48,
        height:192,
        width:"90%",
        
      }}>
 <View>
 <Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:200,fontWeight:"bold"}}>Lorry ID</Title>


          <Title style={{color:"#EA1D25",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:150,marginTop:-53,fontWeight:"bold",left:60}}>Cancelled</Title>


         <Title style={{color:"#454F63",fontSize:12,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:150,marginTop:-30}}>18/02/2020,12:10 pm</Title>

<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:100,marginTop:-35}}>Origin City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:-35}}>Consignor Name</Title>
<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginBottom:-20}}>Destination City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:5}}>Consignee Name</Title>

        <View style={styles.MainContainer4}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle4}
          activeOpacity = { .10 }
          onPress={() =>
            //   this.callApi()
                navigation.navigate('Stafflorryid')
             }
       >
 
            <Text style={styles.TextStyle4}>Details</Text>
          
             </TouchableOpacity>
           </View>  
        </View>

        </Card>


        <Card
      style={{
        elevation: 24,
        borderRadius: 12,
        marginTop: 20,
        backgroundColor: '#fafcff',
        padding: 18,
        marginLeft: 18,
        marginRight:-48,
        height:192,
        width:"90%",
        
      }}>
 <View>
 <Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:200,fontWeight:"bold"}}>Lorry ID</Title>


          <Title style={{color:"#EA1D25",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:150,marginTop:-53,fontWeight:"bold",left:60}}>Cancelled</Title>


         <Title style={{color:"#454F63",fontSize:12,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginLeft:150,marginTop:-30}}>18/02/2020,12:10 pm</Title>

<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",paddingBottom:20,
        marginRight:100,marginTop:-35}}>Origin City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:-35}}>Consignor Name</Title>
<Title style={{color:"#454F63",fontSize:11,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginBottom:-20}}>Destination City</Title>

<Title style={{color:"#454F63",fontSize:14,
        fontFamily:"normal normal bold 16px/19px Lato",
        marginRight:100,marginTop:5}}>Consignee Name</Title>

        <View style={styles.MainContainer4}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle4}
          activeOpacity = { .10 }
          onPress={() =>
            //   this.callApi()
                navigation.navigate('Stafflorryid')
             }
       >
 
            <Text style={styles.TextStyle4}>Details</Text>
          
             </TouchableOpacity>
           </View>  
        </View>

        </Card>
  </ScrollView>
  <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle6}
          activeOpacity = { .10 }
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('Cancleconsigment')
           }
       >
 
            <Text style={styles.TextStyle6}>Inbound</Text>
          
             </TouchableOpacity>

             <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .10 }
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              navigation.navigate('Viewinvoice')
           }
       >
 
            <Text style={styles.TextStyle}>Outbound</Text>
          
             </TouchableOpacity>
           </View> 
    </View>
  );
        

    
   }
   export default Cancelled;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5",
  
  },
  SubmitButtonStyle4: {
    width:"25%",
    height: 35,
    marginTop:-45,
    textAlign:'center',
    paddingTop:5,
    // paddingBottom:20,
    marginLeft:220,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
  SubmitButtonStyle6: {
    width:"50%",
    height: 48,
    marginTop:25,
    paddingTop:10,
    paddingBottom:30,
  //   marginLeft:20,
    marginRight:20,
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56',
    left:20
  },
 
  TextStyle6:{
      color:'#602F56',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 

  SubmitButtonStyle: {
      width:"50%",
      height: 48,
      marginTop:25,
      paddingTop:10,
      paddingBottom:30,
      // marginLeft:20,
      marginRight:20,
      backgroundColor:'#602F56',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#602F56',
      bottom:73,
      left:170
    },
    TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 
  TextStyle4:{
    color:'#602F56',
    textAlign:'center',
    // fontWeight:"bold",
    fontSize:14,
    fontFamily: "normal normal normal 14px/17px Inter",
   
  },

});