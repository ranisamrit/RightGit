import React, { Component,useState } from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
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
  Divider,
  Avatar,
} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import {  Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Path from '../assets/Path.png'
const InvoiceDetils = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
             <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
             <TouchableOpacity
         
          onPress={() =>
         
              navigation.navigate('LorryID')
           }
       >
             <Image
                source={Path}
                style={{ width: 20, height: 20,marginTop:15,left:30
              }}
              />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
              Invoice Details
          </Text>
             <ScrollView vartical={true}>
             <View style={styles.container1}>
        <Card style={{ width: '89%', height: '31%', borderRadius: 10,
          alignSelf:"center",opacity: 1,marginTop:20 }}>
         

         
          {/** top -left */}
          <View style={{  }}>
            <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
         Invoice Number
            </Text>
            <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />

          <View style={{  }}>
            <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
              Invoice Value
            </Text>
            <Text style={{ fontSize: 15,left:250,top:-6,color: '#454F63', }}>
           $xxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          {/**Card text */}
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Part Number
          </Text>
          <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
        Quantity
          </Text>
          <Text style={{ fontSize: 15,left:268,top:-6,color: '#454F63', }}>
           xxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20}} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Remark
          </Text>
          <Text style={{ fontSize: 15,left:205,top:-6,color: '#454F63', }}>
           - - - - - - - - - - - - 
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:10 }} />
        </Card>




        <Card style={{ width: '89%', height: '33%', borderRadius: 10,
          alignSelf:"center",opacity: 1,marginTop:30 }}>
         

          {/** top-right corner */}
          <View style={{ position: 'absolute', top: 0, right: 0 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                backgroundColor: 'white',
              }}>
           
            </Text>
          </View>

          {/** top -left */}
          <View style={{  }}>
          <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
         Invoice Number
            </Text>
            <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />

          <View style={{  }}>
            <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
              Invoice Value
            </Text>
            <Text style={{ fontSize: 15,left:250,top:-6,color: '#454F63', }}>
           $xxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          {/**Card text */}
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Part Number
          </Text>
          <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
        Quantity
          </Text>
          <Text style={{ fontSize: 15,left:268,top:-6,color: '#454F63', }}>
           xxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20}} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Remark
          </Text>
          <Text style={{ fontSize: 15,left:205,top:-6,color: '#454F63', }}>
           - - - - - - - - - - - - 
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:35 }} />
        </Card>

        <Card style={{ width: '89%', height: '35%', borderRadius: 10,
          alignSelf:"center",opacity: 1,marginTop:30 }}>
         

          {/** top-right corner */}
          <View style={{ position: 'absolute', top: 0, right: 0 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                backgroundColor: 'white',
              }}>
           
            </Text>
          </View>

          {/** top -left */}
          <View style={{  }}>
          <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
         Invoice Number
            </Text>
            <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />

          <View style={{  }}>
            <Text
              style={{ fontSize: 15, color: '#454F63',marginLeft:30,top:15}}>
              Invoice Value
            </Text>
            <Text style={{ fontSize: 15,left:250,top:-6,color: '#454F63', }}>
           $xxxx
          </Text>
          </View>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          {/**Card text */}
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Part Number
          </Text>
          <Text style={{ fontSize: 15,left:240,top:-6,color: '#454F63', }}>
           xxxxxxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20 }} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
        Quantity
          </Text>
          <Text style={{ fontSize: 15,left:268,top:-6,color: '#454F63', }}>
           xxx
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:20}} />
          <Text style={{ fontSize: 15,marginLeft:30,top:15,color: '#454F63', }}>
      Remark
          </Text>
          <Text style={{ fontSize: 15,left:205,top:-6,color: '#454F63', }}>
           - - - - - - - - - - - - 
          </Text>
          <Divider style={{ backgroundColor: '#ECECEC',height:2,marginRight:25,marginLeft:25,marginTop:35 }} />
        </Card>
        </View>

        
      </ScrollView> 
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
 
            <Text style={styles.TextStyle1}>Back</Text>
          
             </TouchableOpacity>
           </View>   

           </View>
      );
   }
   export default InvoiceDetils;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5F5F5"
   
  },
  container1:{
      flex:1,
   
  },
 
  SubmitButtonStyle1: {
    width:"90%",
    height: 48,
    marginTop:40,
    paddingTop:10,
    // paddingBottom:30,
    marginLeft:20,
    marginBottom:30,
    marginRight:20,
    backgroundColor:'#602F56',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#602F56'
  },
 
  TextStyle1:{
      color:'#FFFFFF',
      textAlign:'center',
      fontWeight:"bold",
      fontSize:14,
      fontFamily: "normal normal normal 16px/20px Inter",
     
  }, 
 
 
 

});