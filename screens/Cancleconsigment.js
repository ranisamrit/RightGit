// import React, { Component,useState } from 'react';
// // import { Icon, InlineIcon } from '@iconify/react';
// // import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
// import {
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
  
//   ActivityIndicator,
//  StatusBar,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Modal,
  
// } from 'react-native';

// import {
//   TouchableRipple,
//   Switch,
//   Title,
//   Card,
//   TextInput,
//   Paragraph,
//   Button,
//   Avatar,
//   Divider,
  
// } from 'react-native-paper';
// // import * as Animatable from 'react-native-animatable';
// import Search from '../assets/SearchIcon.png';
// import {  Input,SocialIcon,Icon,Header} from 'react-native-elements';
// import Path from '../assets/Path.png';

// const ReschedulePickup = ({navigation}) => {
   
   
// return (
          
       
           

// <View style = {styles.container}>

//              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
//              <TouchableOpacity
         
//           onPress={() =>
//           //   this.callApi()
//               // this.props.navigation.navigate('InvoiceDetils')
//               navigation.navigate('Pending')
//            }
//        >
//              <Image
//                 source={Path}
//                 style={{ width: 20, height: 20,marginTop:15,left:30
//               }}
//               />
//               </TouchableOpacity>
//               <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter"  }}>
//               Back
//           </Text>
            
//           <Modal  animationType = {"slide"} transparent = {true}
//             // visible = {this.state.isVisible}
//             onRequestClose = {() =>{ console.log("") } }
//             onBackdropPress={() => {this.setState({ isVisible: false})}
//             }
//            >

         
//           <View style={{ fontSize: 15, backgroundColor:'#e9967a',height:"60%",borderRadius:30,
//           width:"90%",margin:15,marginBottom:60,marginTop:150,paddingTop:10,paddingBottom:10,paddingLeft:10,
//           paddingRight:10}}> 
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           {/* <Avatar.Image style={{ marginTop:12 , marginLeft:20 }} size={75} source={ Ment_Onnnn}/> */}
//           <View> 
            
//              {/* <TextInput
//           style={styles.textInputStyle}
//         //   onChangeText={text => this.SearchFilterFunction(text)}
//           value={this.state.text}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
          
//         /> */}
//           <Text style={{ marginTop:15 ,marginLeft:6,fontSize:20,color:"#8b0000"}}>
//       Ferrero Matheues
//               </Text>
//               <View>
//           <Text style={{ marginTop:2 ,marginLeft:6,color:"#8b0000"}}>
//               Price: 200
//               </Text>
              
//               </View>
            
//               <Text style={{ marginTop:2 ,marginLeft:6,color:"#8b0000"}}>
//                 Duration: 30 Min
//               </Text>

//                     </View>
//                     <Text style={{ marginTop:40 ,marginRight:5,fontSize:20,color:"#8b0000"}}>
//                 4.8
//               </Text>
   
//           </View>
// <View>
// <Text multiline={true}
// 	numberOfLines={4}
//   blurOnSubmit={false} 
  
//   style={{  marginLeft:20,marginTop:20,fontSize:20 ,alignSelf : "center" ,width:"90%",color:"#8b0000"}}>
//     Bio: Rani Samrit is my name please contact me if you need any help. Rani Samrit is
//      my name please contact me if you need any help.</Text>
// <Text style={{  marginLeft:20,marginTop:20,fontSize:20,color:"#8b0000"}}>Languages:</Text>
// <Text style={{  marginLeft:20,marginTop:10,color:"#8b0000"}}>English, Hindi, French</Text>
//          <TouchableOpacity
//               style={styles.userBtn}
//               onPress = {() => {this.setState({ isVisible: false})}}
//             >
//               <Text style={styles.btnTxt}>Book A Session</Text>
//             </TouchableOpacity>

// </View>
     
//           </View>




//         </Modal>
//           <Card
// style={{
// // elevation: 24,
// borderRadius: 5,
// borderColor:"#ECECEC",
// borderWidth:1,
// marginTop: 10,
// backgroundColor: '#fafcff',

// marginLeft: 18,
// // marginRight:-48,
// height:190,
// width:"90%",

// }}>
     
// <View>
// <Card.Content>



// <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
// fontFamily:" normal normal normal 14px/17px Inter",marginTop:10,marginRight:180,fontWeight:"bold"}}>Previous Date </Text>

// <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />

// <Text style={{color:"#454F63",fontSize:16,textAlign:"center",
// fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:150,fontWeight:"bold"}}>Schedule Pickup</Text>

// <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
// fontFamily:" normal normal normal 14px/20px Inter",marginTop:-68,marginLeft:190,fontWeight:"bold"}}>18/02/2020</Text>



// <View>
// <Card style={{
// elevation: 20,
// borderRadius: 5,
// borderColor:"#ECECEC",
// borderWidth:1,
// marginTop: 90,
// backgroundColor: '#fafcff',

// marginLeft: 18,
// // marginRight:-48,
// height:50,
// width:"90%",

// }}>
// <Text style={{color:"#454F63",fontSize:14,textAlign:"center",
// fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:90}}>Select Available Slot</Text>

// </Card>
// </View>




// </Card.Content>

// </View>
// </Card>




        
           
            
//            <View style={styles.MainContainer1}>
//        <TouchableOpacity
//           style={styles.SubmitButtonStyle1}
//           activeOpacity = { .10 }
//           onPress={() =>
          
//               // this.props.navigation.navigate('Customerlogin')
//             navigation.navigate('Customerlogin')}
           
//        >
 
//             <Text style={styles.TextStyle1}>Save</Text>
          
//              </TouchableOpacity>
//            </View>

//            </View>
//   );
        

    
//    }
//    export default ReschedulePickup;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#F5F5F5",
  
//   },
//   SubmitButtonStyle1: {
//     width:"90%",
//     height: 48,
//     marginTop:360,
//     paddingTop:10,
//     paddingBottom:15,
//     marginLeft:20,
//     marginRight:20,
//     backgroundColor:'#602F56',
//     borderRadius:10,
//     borderWidth: 1,
//     borderColor: '#602F56'
//   },
 
//   TextStyle1:{
//     color:'#fff',
//     textAlign:'center',
//     fontWeight:"bold",
//     fontSize:14,
//     fontFamily: "normal normal normal 16px/20px Inter",
   
     
//   }, 
 
//   SubmitButtonStyle: {
//     width:"90%",
//     height: 48,
//     marginTop:210,
//     paddingTop:10,
//     paddingBottom:15,
//     marginLeft:20,
//     marginRight:20,
//     backgroundColor:'transparent',
//     borderRadius:10,
//     borderWidth: 1,
//     borderColor: '#602F56'
//   },
 
//   TextStyle:{
//     color:'#602F56',
//     textAlign:'center',
//     fontWeight:"bold",
//     fontSize:14,
//     fontFamily: "normal normal normal 16px/20px Inter",
     
//   }, 

// });








import React, { Component } from 'react';
// import CardsContainer from './Component/CardsContainer';
import {  Button,Divider,Card ,SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import Ment_Oe from '../src/Component/Img/Photo.jpg';
import Ment_Oene from '../src/Component/Img/Photoone.jpg';
import Ment_Oeee from '../src/Component/Img/harishankobalasingam8PMvB4VyVXAunsplash.jpg';
import Ment_Onnnn from '../src/Component/Img/luisvillasmilhh3ViD0r0Rcunsplash.jpg';
import Ment_ssss from '../src/Component/Img/Groupthree.png';
// import Search from '../src/Component/Img/MentOeAssetsicons/SearchIcon.png';
import Account from '../src/Account';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
 
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StatusBar
} from 'react-native';
import Path from '../assets/Path.png'




export default class Cancleconsigment extends Component {
   
        constructor(props) {
          super(props);
          //setting default state
          this.state = {
            isVisible:false
      
        }
    }
    
  

   render() {
       
    const state = this.state;
    const element = (data, index) => (
        <Image
        source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
        //borderRadius style will help us make the Round Shape Image
        style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
      />
 
    );
      return (
          
        
           
                 
             <View style = {styles.container}>

           <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
           
            <TouchableOpacity
         
          onPress={() =>
          //   this.callApi()
              // this.props.navigation.navigate('InvoiceDetils')
              this.props.navigation.navigate('InvalidEntryId')
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
            
           
         
          <Modal  animationType = {"slide"} transparent = {true}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("") } }
            onBackdropPress={() => {this.setState({ isVisible: false})}
            }
           >

<TouchableOpacity
           
              onPress = {() => {this.setState({ isVisible: false})}}
            >
          <View style={{ fontSize: 15, backgroundColor:'#602F56',height:"40%",borderRadius:15,
          width:"93%",margin:15,marginBottom:60,marginTop:240,paddingTop:10,paddingBottom:10,paddingLeft:10,
          paddingRight:10}}> 
          <View style={{  justifyContent: 'space-between',marginTop:30 }}>
          <Text style={{ fontSize: 20,top:15,color: '#fff',alignSelf:"center"}}>
      Shipment Connected
          </Text>
          
          <Text style={{ fontSize: 14,top:30,color: '#fff',alignSelf:"center"}}>
      Shipment already connected.Cannot 
          </Text>
          <Text style={{ fontSize: 14,top:30,color: '#fff',alignSelf:"center"}}>
      reschedule your pickup. 
          </Text>
          </View>

     
          </View>


          </TouchableOpacity>


        </Modal>
      
        

        
      <TouchableOpacity onPress = {() => {this.setState({ isVisible: true})}}>
                
<Card 
            
style={{
// elevation: 24,
borderRadius: 20,
borderColor:"#ECECEC",
borderWidth:1,
marginTop: 10,
backgroundColor: '#fafcff',

marginLeft: 18,
// marginRight:-48,
height:190,
width:"90%",

}}>
     
<View>




<Text style={{color:"#454F63",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:10,marginRight:180,fontWeight:"bold"}}>Previous Date </Text>

<Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10,marginTop:10}} />

<Text style={{color:"#454F63",fontSize:16,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:15,marginRight:150,fontWeight:"bold"}}>Schedule Pickup</Text>

<Text style={{color:"#454F63",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/20px Inter",marginTop:-68,marginLeft:190,fontWeight:"bold"}}>18/02/2020</Text>

</View>

<View style={{marginTop:70,width:"100%",elevation: 20,



}}>
    
<Card style={{
elevation: 20,
borderRadius: 30,
borderColor:"#ECECEC",
borderWidth:1,
marginTop: 90,
backgroundColor: '#fafcff',

marginLeft: 18,
// marginRight:-48,
height:"20%",
width:"90%",

}}>
<Text style={{color:"#454F63",fontSize:14,textAlign:"center",
fontFamily:" normal normal normal 14px/17px Inter",marginTop:5,marginRight:90}}>Select Available Slot</Text>

</Card>
</View>

</Card>
            </TouchableOpacity>
           



            <View style={styles.MainContainer1}>
      <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
        //   onPress={() =>
          
              // this.props.navigation.navigate('Customerlogin')
            // navigation.navigate('Customerlogin')}
           
       >
 
            <Text style={styles.TextStyle1}>Save</Text>
          
             </TouchableOpacity>
           </View>








            </View>


            
   
           
      




      
    
 
      
      
     
  
      );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  SubmitButtonStyle1: {
        width:"90%",
        height: 48,
        marginTop:360,
        paddingTop:10,
        paddingBottom:15,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#602F56',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#602F56',
        top:60
      },
     
      TextStyle1:{
        color:'#fff',
        textAlign:'center',
        fontWeight:"bold",
        fontSize:14,
        fontFamily: "normal normal normal 16px/20px Inter",
       
         
      }, 
  
   
      
      
   
        
         
          
         
        
     
});