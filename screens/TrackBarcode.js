// // import React, { Component,useState } from 'react';
// // // import { Icon, InlineIcon } from '@iconify/react';
// // // import iosQrScanner from '@iconify/icons-ion/ios-qr-scanner';
// // import {
// //   Text,
// //   StyleSheet,
// //   View,
// //   FlatList,
  
// //   ActivityIndicator,
// //  StatusBar,
// //   TouchableOpacity,
// //   Image,
// //   ScrollView,
// //   Modal,
  
// // } from 'react-native';

// // import {
// //   TouchableRipple,
// //   Switch,
// //   Title,
// //   Card,
// //   TextInput,
// //   Paragraph,
// //   Button,
// //   Avatar,
// // } from 'react-native-paper';
// // import * as Animatable from 'react-native-animatable';
// // import {  Input,SocialIcon,Icon} from 'react-native-elements';
// // // import Barcode from "react-native-barcode-builder";
// // import Scan from '../assets/scan.png';
// // import Path from '../assets/Path.png';
// // const TrackBarcode = ({navigation}) => {
   
   
  

  
// //       return (
          
       
// //              <View style = {styles.container}>
// //               <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
// //               <TouchableOpacity
         
// //          onPress={() =>
// //          //   this.callApi()
// //              // this.props.navigation.navigate('InvoiceDetils')
// //              navigation.navigate('scanbarcodeApp')
// //           }
// //       >
// //             <Image
// //                source={Path}
// //                style={{ width: 20, height: 20,marginTop:15,left:30
// //              }}
// //              />
// //              </TouchableOpacity>
// //              <Text style={{ fontSize: 15,left:70,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter" }}>
// //               Back
// //           </Text>

// //               {/* <Barcode value="Hello World" format="CODE128" /> */}


// //               <Image   
// //                 // animation="bounceIn"
// //                 duraton="1500"
// //             source={Scan}
// //             style={styles.logo}
// //             resizeMode='center'
// //             />
// //     <View style = {styles.Container2}>

// //              <Title style={{color:"#602F56",fontSize:22,textAlign:"center",
// //         fontFamily:"normal normal normal 16px/24px Inter",paddingBottom:3}}>Scan Barcode</Title>
// //          <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
// //         fontFamily:"normal normal medium 14px/17px Inter",}}>Place the barcode in center of </Text>
// //           <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
// //         fontFamily:"normal normal medium 14px/17px Inter",marginBottom:40}}>the frame to scan</Text>
// // </View>

// // <Input

// // placeholder=''
// // placeholderTextColor="#000"
// // selectionColor="#fff"
// // autoCapitalize = "none"
// // secureTextEntry={true}
// // // onChangeText = {this.handleusername}
// // onChangeText={(value) => 
  
// //   {
// //   //   console.log(value)
// //   //   this.setState({username: value})

// // }
// // }
// // style={styles.Input}

// // // leftIcon={
// //   // <Icon
// //   //   name='user'
// //   //   size={24}
// //   //   color='black'

// //   // />
// // // }
// // />
         



// //             <View style={styles.MainContainer1}>
// //        <TouchableOpacity
// //           style={styles.SubmitButtonStyle1}
// //           activeOpacity = { .10 }
// //           onPress={() =>
          
          
// //               navigation.navigate('LorryID')
// //            }
// //        >
 
// //             <Text style={styles.TextStyle1}>Capture Barcode</Text>
          
// //              </TouchableOpacity>
// //            </View>
 
     


// //            </View>
// //       );
// //    }
// //    export default TrackBarcode;
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor:"#F5F5F5",
// //        paddingTop:10
// //       },
// //       Container1:{
// //     marginTop:-200
// //       },
// //       Container2:{
// //     marginTop:100
// //       },
    
// //       text:{
// //         fontFamily: "normal normal normal 17px/20px Inter",
// //         fontSize:17,
// //         color:"#602F56",
// //         // marginLeft:80,
// //         textAlign:'center',
// //         paddingTop:100,
// //         paddingBottom:150
// //         // top: "94px",
// //         // left: "98px",
// //         // width: "212px",
// //         // height: "26px",
// //       },
// //       text1:{
// //         fontFamily: "normal normal 600 14px/17px Inter",
// //         fontSize:14,
// //         color:"#602F56",
// //         // marginLeft:80,
// //         textAlign:'center',
// //         paddingTop:100,
// //         paddingBottom:100
// //         // top: "94px",
// //         // left: "98px",
// //         // width: "212px",
// //         // height: "26px",
// //       },
// //       SubmitButtonStyle1: {
// //         width:"90%",
// //         height: 48,
// //         marginTop:100,
// //         paddingTop:10,
// //         paddingBottom:15,
// //         marginLeft:20,
// //         marginRight:20,
// //         backgroundColor:'transparent',
// //         borderRadius:10,
// //         borderWidth: 1,
// //         borderColor: '#602F56'
// //       },
     
// //       TextStyle1:{
// //           color:'#602F56',
// //           textAlign:'center',
// //           fontWeight:"bold",
// //           fontSize:14,
// //           fontFamily: "normal normal normal 16px/20px Inter",
         
// //       },
      
// //     Input:{
// //         textAlign:"center",
// //         fontSize:14
// //         },
// //         mark:{
// //             width:100,
// //             height:100,
// //             alignSelf:"center",
// //             marginTop:10
// //         } ,
// //         logo: {
// //           // width: "100%",
// //           // height:"100%",
// //           // left:250,
// //           top:50,
// //           alignSelf:"center"
// //       },   
    

// // });






// // Barcode and QR Code Scanner using Camera in React Native
// // https://aboutreact.com/react-native-scan-qr-code/

// // import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   View,
//   Linking,
//   TouchableHighlight,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Platform,
//   StyleSheet,
//   StatusBar,
//   Image
// } from 'react-native';

// import {
//     TouchableRipple,
//     Switch,
//     Title,
//     Card,
//     TextInput,
//     Paragraph,
//     Button,
//     Avatar,
//   } from 'react-native-paper';
//   import {  Input,SocialIcon,Icon} from 'react-native-elements';
// import Scan from '../assets/scan.png';
// import Path from '../assets/Path.png';
// // import CameraKitCameraScreen
// import {CameraKitCameraScreen} from 'react-native-camera-kit';

// const App = () => {
//   const [qrvalue, setQrvalue] = useState('');
//   const [opneScanner, setOpneScanner] = useState(false);

//   const onOpenlink = () => {
//     // If scanned then function to open URL in Browser
//     Linking.openURL(qrvalue);
//   };

//   const onBarcodeScan = (qrvalue) => {
//     // Called after te successful scanning of QRCode/Barcode
//     setQrvalue(qrvalue);
//     setOpneScanner(false);
//   };

//   const onOpneScanner = () => {
//     // To Start Scanning
//     if (Platform.OS === 'android') {
//       async function requestCameraPermission() {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//               title: 'Camera Permission',
//               message: 'App needs permission for camera access',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             // If CAMERA Permission is granted
//             setQrvalue('');
//             setOpneScanner(true);
//           } else {
//             alert('CAMERA permission denied');
//           }
//         } catch (err) {
//           alert('Camera permission err', err);
//           console.warn(err);
//         }
//       }
//       // Calling the camera permission function
//       requestCameraPermission();
//     } else {
//       setQrvalue('');
//       setOpneScanner(true);
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>




//       {opneScanner ? (
//         <View style={{flex: 1}}>
//           <CameraKitCameraScreen
//             showFrame={false}
//             // Show/hide scan frame
//             scanBarcode={true}
//             // Can restrict for the QR Code only
//             laserColor={'blue'}
//             // Color can be of your choice
//             frameColor={'yellow'}
//             // If frame is visible then frame color
//             colorForScannerFrame={'black'}
//             // Scanner Frame color
//             onReadCode={(event) =>
//               onBarcodeScan(event.nativeEvent.codeStringValue)
//             }
//           />
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
//       <TouchableOpacity
         
//          onPress={() =>
//          //   this.callApi()
//              // this.props.navigation.navigate('InvoiceDetils')
//              navigation.navigate('scanbarcodeApp')
//           }
//       >
//             <Image
//                source={Path}
//                style={{ width: 20, height: 20,marginTop:15,right:140
//              }}
//              />
//              </TouchableOpacity>
//              <Text style={{ fontSize: 15,right:95,top:-20,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter" }}>
//               Back
//           </Text>

//               {/* <Barcode value="Hello World" format="CODE128" /> */}


//               <Image   
//                 // animation="bounceIn"
//                 duraton="1500"
//             source={Scan}
//             style={styles.logo}
//             resizeMode='center'
//             />
//            <Title style={{color:"#602F56",fontSize:22,textAlign:"center",
//         fontFamily:"normal normal normal 16px/24px Inter",paddingBottom:3}}>Scan Barcode</Title>
//          <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
//         fontFamily:"normal normal medium 14px/17px Inter",}}>Place the barcode in center of </Text>
//           <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
//         fontFamily:"normal normal medium 14px/17px Inter",marginBottom:40}}>the frame to scan</Text>


// <Input

// placeholder='**********'

// placeholderTextColor="#000"
// selectionColor="#fff"
// autoCapitalize = "none"
// secureTextEntry={true}

// // onChangeText = {this.handleusername}
// onChangeText={(value) => 
  
//   {
//   //   console.log(value)
//   //   this.setState({username: value})

// }
// }
// style={styles.Input}


// />



// <View style={styles.MainContainer1}>
//        <TouchableOpacity
//           style={styles.SubmitButtonStyle1}
//           activeOpacity = { .10 }
//           onPress={() =>
          
            
//               navigation.navigate('TrackBarcode')
//            }
//        >
 
//             <Text style={styles.TextStyle1}>Capture Barcode</Text>
          
//              </TouchableOpacity>
//            </View>


//           {/* <Text style={styles.textStyle}>
//             {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
//           </Text>
//           {qrvalue.includes('https://') ||
//           qrvalue.includes('http://') ||
//           qrvalue.includes('geo:') ? (
//             <TouchableHighlight onPress={onOpenlink}>
//               <Text style={styles.textLinkStyle}>
//                 {
//                   qrvalue.includes('geo:') ?
//                   'Open in Map' : 'Open Link'
//                 }
//               </Text>
//             </TouchableHighlight>
//           ) : null} */}
//           {/* <TouchableHighlight
//             onPress={onOpneScanner}
//             style={styles.buttonStyle}>
//             <Text style={styles.buttonTextStyle}>
//             Track Now
//             </Text>
//           </TouchableHighlight> */}
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   // titleText: {
//   //   fontSize: 22,
//   //   textAlign: 'center',
//   //   fontWeight: 'bold',
//   // },
//   // textStyle: {
//   //   color: 'black',
//   //   fontSize: 16,
//   //   textAlign: 'center',
//   //   padding: 10,
//   //   marginTop: 16,
//   // },
//   // buttonStyle: {
//   //   width:"90%",
//   //           height: 48,
//   //           marginTop:100,
//   //           paddingTop:10,
//   //           paddingBottom:15,
//   //           marginLeft:20,
//   //           marginRight:20,
//   //           backgroundColor:'transparent',
//   //           borderRadius:10,
//   //           borderWidth: 1,
//   //           borderColor: '#602F56'
//   // },
//   // buttonTextStyle: {
//   //   color:'#602F56',
//   //         textAlign:'center',
//   //         fontWeight:"bold",
//   //         fontSize:14,
//   //         fontFamily: "normal normal normal 16px/20px Inter",
//   // },
//   // textLinkStyle: {
//   //   color: 'blue',
//   //   paddingVertical: 20,
//   // },
//           Input:{
//             textAlign:"center",
//             fontSize:14
//             },
           
//             SubmitButtonStyle1: {
//               width:290,
//               height: 48,
//               // marginTop:180,
//               // paddingTop:10,
//               // paddingBottom:15,
//               // marginLeft:20,
//               // marginRight:20,
//               backgroundColor:'transparent',
//               borderRadius:10,
//               borderWidth: 1,
//               borderColor: '#602F56'
//             },
           
//             TextStyle1:{
//                 color:'#602F56',
//                 textAlign:'center',
//                 fontWeight:"bold",
//                 fontSize:14,
//                 fontFamily: "normal normal normal 16px/20px Inter",
               
//             },         
        
// });




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
import * as Animatable from 'react-native-animatable';
import {  Input,SocialIcon,Icon} from 'react-native-elements';
// import Barcode from "react-native-barcode-builder";
import Scan from '../assets/scan.png';
import Path from '../assets/Path.png';

const TrackBarcode = ({navigation}) => {
   
   
  

  
      return (
          
       
             <View style = {styles.container}>
              <StatusBar backgroundColor='#F5F5F5' barStyle="light-content"/>
              <TouchableOpacity
         
         onPress={() =>
         //   this.callApi()
             // this.props.navigation.navigate('InvoiceDetils')
             navigation.navigate('scanbarcodeApp')
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
{/* <View style = {styles.Container1}>
<Image source={require('../src/Component/Img/Barcode.png')
}
style={styles.mark}/>
 
 </View> */}
{/* <Barcode value="Hello World" format="CODE128" /> */}

  
         <Image   
                // animation="bounceIn"
                duraton="1500"
            source={Scan}
            style={styles.logo}
            resizeMode='center'
            />
    <View style = {styles.Container2}>

             <Title style={{color:"#602F56",fontSize:22,textAlign:"center",
        fontFamily:"normal normal normal 16px/24px Inter",paddingBottom:3}}>Scan Barcode</Title>
         <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
        fontFamily:"normal normal medium 14px/17px Inter",}}>Place the barcode in centre of </Text>
          <Text style={{color:"#172B4D",fontSize:14,textAlign:"center",
        fontFamily:"normal normal medium 14px/17px Inter",marginBottom:40}}>the frame to scan</Text>
</View>

<Input

placeholder='**********'

placeholderTextColor="#000"
selectionColor="#fff"
autoCapitalize = "none"
secureTextEntry={true}

// onChangeText = {this.handleusername}
onChangeText={(value) => 
  
  {
  //   console.log(value)
  //   this.setState({username: value})

}
}
style={styles.Input}


/>
         



            <View style={styles.MainContainer1}>
       <TouchableOpacity
          style={styles.SubmitButtonStyle1}
          activeOpacity = { .10 }
          onPress={() =>
          
            
              navigation.navigate('LorryID')
           }
       >
 
            <Text style={styles.TextStyle1}>Capture Barcode</Text>
          
             </TouchableOpacity>
           </View>
     


           </View>
      );
   }
   export default TrackBarcode;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5F5F5",
        paddingTop:10
      },
      Container1:{
    marginTop:-200
      },
      Container2:{
    marginTop:100
      },
    
      text:{
        fontFamily: "normal normal normal 17px/20px Inter",
        fontSize:17,
        color:"#602F56",
        // marginLeft:80,
        textAlign:'center',
        paddingTop:100,
        paddingBottom:150
        // top: "94px",
        // left: "98px",
        // width: "212px",
        // height: "26px",
      },
      text1:{
        fontFamily: "normal normal 600 14px/17px Inter",
        fontSize:14,
        color:"#602F56",
        // marginLeft:80,
        textAlign:'center',
        paddingTop:100,
        paddingBottom:100
        // top: "94px",
        // left: "98px",
        // width: "212px",
        // height: "26px",
      },
      
     
    
    
     
      SubmitButtonStyle1: {
        width:"90%",
        height: 48,
        marginTop:100,
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
          fontSize:14,
          fontFamily: "normal normal normal 16px/20px Inter",
         
      },
      
    // Input:{
        
    //     fontSize:14
    //     },
        mark:{
            width:100,
            height:100,
            alignSelf:"center",
            marginTop:10
        }  ,  
        logo: {
          // width: "100%",
          // height:"100%",
          // left:250,
          top:50,
          alignSelf:"center"
      },
      Input:{
                    textAlign:"center",
                    fontSize:14
                    },
});




