import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image,TextInput,  } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './src/DrawerContent';
import FirstPage from './src/FirstPage';
import SecondPage from './src/SecondPage';
import ThirdPage from './src/ThirdPage';
import Login from './src/Login';
import Signup from './src/SignUp';
import Account from './src/Account';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import scanbarcodeApp from './screens/scanbarcodeApp';
import TrackBarcode from './screens/TrackBarcode';
import LorryID from './screens/LorryID';
import InvoiceDetils from './screens/InvoiceDetils';
import Customerlogin from './screens/Customerlogin';
import ScreenDetils from './screens/ScreenDetils';
import MainTabScreen from './screens/MainTabScreen';
import InvalidEntryId from './screens/InvalidEntryId';
import VendorName from './screens/VendorName';
import Notification from './screens/Notification';
import PickupRequests from './screens/PickupRequests';
import menuu from './assets/Groupone.png';
import ReschedulePickup from './screens/ReschedulePickup';
import PickupForm from './screens/PickupForm';
import AddNewConsignor from './screens/AddNewConsignor';
import Pickuprequiestsuccessfull from './screens/Pickuprequiestsuccessfull';
import Invalidlorry from './screens/Invalidlorry';
import Cancleconsigment from './screens/Cancleconsigment';
import Viewinvoice from './screens/Viewinvoice';
import FilterScreen from './screens/FilterScreen';
import SelectionScreen from './screens/StaffSection/SelectionScreen';
import StaffDashboard from './screens/StaffSection/StaffDashboard';
import Pickupsuccessfullreq from './screens/Pickupsuccessfullreq';
import Staffmaintab from './screens/StaffSection/Staffmaintab';
import Consignments from './screens/StaffSection/Consignments';
import Stafflorryid from './screens/StaffSection/Stafflorryid';
import PendingPickups from './screens/StaffSection/PendingPickups';
import Addvahicaldetails from './screens/StaffSection/Addvahicaldetails';
import Consigmentdetailsform from './screens/StaffSection/Consigmentdetailsform';
import Addinvoice from './screens/StaffSection/Addinvoice';
import Path from './assets/Path.png';
import filter from './assets/filter.png';
import Search from './assets/SearchIcon.png';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const initialRouteName = 'SplashScreen';

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flex: 1, 
      backgroundColor: 'transparent',
      paddingTop:20}}>
        
    <TouchableOpacity 
    onPress={() =>  toggleDrawer()}
    >
            <Image
              source={menuu}
              style={{width: 25, height: 20, marginLeft: 22 ,flexDirection:'row', justifyContent:'space-between', 
              marginTop:-5,borderRadius:2}}
            />
              </TouchableOpacity>
   
         </View>
  );

  
}


function firstScreenStack({ navigation }) {
  return (
    
    <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen}
           
           style={
            { backgroundColor:'transparent'}
           }
          options={{
            
           headerShown:false }}/>


           
          <Stack.Screen name="SignInScreen" component={SignInScreen} 
         style={
          { backgroundColor:'transparent'}
         }
        options={{
         headerShown:false }}/>
           <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
          style={
            { backgroundColor:'transparent'}
           }
          options={{
           headerShown:false }}/>
           <Stack.Screen name="scanbarcodeApp" component={scanbarcodeApp} 
          style={
            { backgroundColor:'transparent'}
           }
          options={{
           headerShown:false }}/>

           <Stack.Screen name="TrackBarcode" component={TrackBarcode} 
           style={
            { backgroundColor:'transparent'}
           }
          options={{
           headerShown:false }}/>
          
           <Stack.Screen name="LorryID" component={LorryID} style={
            { backgroundColor:'transparent'}
           }
          options={{
           headerShown:false }}/>
          

           <Stack.Screen name="InvoiceDetils" component={InvoiceDetils} 
         style={
           { backgroundColor:'transparent'}
               }
           options={{
          headerShown:false }}/>

        <Stack.Screen name="Customerlogin" component={Customerlogin} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
         headerShown:false }}/>


        <Stack.Screen name="ScreenDetils" component={ScreenDetils} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
         headerShown:false }}/>

 <Stack.Screen name="Notification" component={Notification} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>
         <Stack.Screen name="Consignments" component={Consignments} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="PickupRequests" component={PickupRequests} 
         name="PickupRequests"
         component={PickupRequests}
         options={{
          title: 'Hello Mayur,', //Set Header Title
          // headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerTitle: (props) => ( 
            <View style={{height: 80,
                            width: 440,
                            backgroundColor: 'white',
                            // elevation: 5,
                           top:65,
                          //  right:350,
                           left:-90,
                           marginLeft:20,
                           marginRight:-60
                            }}>
                          <Text style={{bottom:35,left:60,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Pickup Requests </Text>    
                          <View style={{ height: 42,
                            width: 290,
                            backgroundColor: 'white',
                            elevation: 5,
                            alignSelf: 'center',
                            top:- 29,
                            borderRadius: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            // marginLeft:-30,
                            right:25,
                            
                            marginTop: 30,
                            marginBottom:30,
                            marginRight:50}}>
                                          
                                          
                                           <TextInput
                                             placeholder="Search with Pickup ID"
                                             
                                             style={{fontSize:14,}}
                                           />
                                            <Image
                                      source={Search}
                                      style={{ width: 18,height:18,marginBottom:1,marginLeft:90
                                     }}
                                    />
                                  
                          
                          
                           </View>
                           </View>
                        ),
         
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:18,
            alignItems:'center',
            color:'#602F56'
           
          },
        }}
          />
<Stack.Screen name="InvalidEntryId" component={InvalidEntryId} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="ReschedulePickup" component={ReschedulePickup} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="PickupForm" component={PickupForm} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>


<Stack.Screen name="AddNewConsignor" component={AddNewConsignor} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>


<Stack.Screen name="Pickuprequiestsuccessfull" component={Pickuprequiestsuccessfull} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="Invalidlorry" component={Invalidlorry} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="Cancleconsigment" component={Cancleconsigment} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>
         <Stack.Screen name="Stafflorryid" component={Stafflorryid} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>


<Stack.Screen name="Viewinvoice" component={Viewinvoice} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
         headerShown:false }}/>

<Stack.Screen name="SelectionScreen" component={SelectionScreen} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
          headerShown:false  }}/>

<Stack.Screen name="Pickupsuccessfullreq" component={Pickupsuccessfullreq} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
          headerShown:false  }}/>
<Stack.Screen name="Addvahicaldetails" component={Addvahicaldetails} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
          headerShown:false  }}/>

<Stack.Screen name="Consigmentdetailsform" component={Consigmentdetailsform} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
          headerShown:false  }}/>


<Stack.Screen name="Addinvoice" component={Addinvoice} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          
          headerShown:false  }}/>


<Stack.Screen name="StaffDashboard" component={StaffDashboard} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerTitle: (props) => ( 
          
            <View style={{height: 80,
                            width: 440,
                            backgroundColor: 'white',
                            // elevation: 5,
                           top:65,
                          //  right:350,
                           left:-100,
                           marginLeft:20,
                           marginRight:-60
                            }}>
                           <Text style={{top:10,left:40,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Hello Mayur,</Text>   
                         
                                  
                                    
                         
                           
                           </View>
                           
                        ), }}/>

<Stack.Screen name="PendingPickups" component={PendingPickups} 
        style={
          { backgroundColor:'transparent'}
         }
        options={{
          // headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerTitle: (props) => ( 
          
            <View style={{height: 80,
                            width: 440,
                            backgroundColor: 'white',
                            // elevation: 5,
                           top:65,
                          //  right:350,
                           left:-100,
                           marginLeft:20,
                           marginRight:-60
                            }}>
                              <TouchableOpacity
         
         onPress={() =>
         //   this.callApi()
             // this.props.navigation.navigate('InvoiceDetils')
             navigation.navigate('StaffDashbord')
          }
      >
            <Image
               source={Path}
               style={{ width: 20, height: 20,marginTop:15,left:25,bottom:50
             }}
             />
             </TouchableOpacity>
             <Text style={{ fontSize: 15,left:60,top:-70,color: '#454F63',fontWeight:"bold",color:"#602F56",fontFamily:"normal normal bold 16px/20px Inter" }}>
             Pending Pickups
          </Text>
                          <View style={{ height: 42,
                            width: 270,
                            backgroundColor: 'white',
                            elevation: 5,
                            alignSelf: 'center',
                            top:- 69,
                            borderRadius: 5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            // marginLeft:-30,
                            right:5,
                            
                            marginTop: 30,
                            marginBottom:30,
                            marginRight:50}}>
                                          
                                          
                                           <TextInput
                                             placeholder="Search with Lorry ID"
                                             
                                             style={{fontSize:14,}}
                                           />
                                            <Image
                                      source={Search}
                                      style={{ width: 18,height:18,marginBottom:1,marginLeft:75
                                     }}
                                    />
                                  
                                    
                         
                         
                          
                           </View> 
                           
                           </View>
                           
                        ),
                       
                        headerTitleStyle: {
                          fontWeight: 'bold', 
                          fontSize:18,
                          alignItems:'center',
                          color:'#602F56'
                         
                        },
                        
                      }}
                      
                    /> 




        <Stack.Screen name="VendorName" component={VendorName} 
       
       name="VendorName"
       component={VendorName}
       options={{
         title: 'Vendor Name', //Set Header Title
        //  headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
         
        
         headerTitle: (props) => ( 
          
          <View style={{height: 80,
                          width: 440,
                          backgroundColor: 'white',
                          // elevation: 5,
                         top:65,
                        //  right:350,
                         left:-100,
                         marginLeft:20,
                         marginRight:-60
                          }}>
                            <Text style={{bottom:35,left:65,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Vendor Name</Text>
                        <View style={{ height: 42,
                          width: 270,
                          backgroundColor: 'white',
                          elevation: 5,
                          alignSelf: 'center',
                          top:- 29,
                          borderRadius: 5,
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingLeft: 20,
                          // marginLeft:-30,
                          right:5,
                          
                          marginTop: 30,
                          marginBottom:30,
                          marginRight:50}}>
                                        
                                        
                                         <TextInput
                                           placeholder="Search with Lorry ID"
                                           
                                           style={{fontSize:14,}}
                                         />
                                          <Image
                                    source={Search}
                                    style={{ width: 18,height:18,marginBottom:1,marginLeft:75
                                   }}
                                  />
                                
                                  
                       
                       
                        
                         </View> 
                         
                         </View>
                         
                      ),
                     
                      headerTitleStyle: {
                        fontWeight: 'bold', 
                        fontSize:18,
                        alignItems:'center',
                        color:'#602F56'
                       
                      },
                      
                    }}
                    
                  /> 
         <Stack.Screen
          name="Staffmaintab"
          component={Staffmaintab}
          options={{
            title: ' Hello Mayur, ', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerTitle: (props) => ( 
              <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")}>
             <View style={{height: 80,
                width: 440,
                backgroundColor: 'white',
                // elevation: 5,
               top:65,
              //  right:350,
               left:-100,
               marginLeft:20,
               marginRight:-60
                }}>
                  <Text style={{bottom:10,left:40,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Hello Mayur,</Text>
              <View style={{ height: 42,
                width: 300,
                backgroundColor: 'white',
                elevation: 5,
                alignSelf: 'center',
                top:- 29,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                // marginLeft:-30,
                right:10,
                
                marginTop: 30,
                marginBottom:30,
                marginRight:50}}>
                              
                              
                               <TextInput
                                 placeholder="Search "
                                 
                                 style={{fontSize:14,}}
                               />
                                <Image
                          source={Search}
                          style={{ width: 18,height:18,marginBottom:1,marginLeft:180
                         }}
                        />
                      
              
               </View>
              
               </View>
                </TouchableOpacity>
            ),
           
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize:18,
              alignItems:'center',
              color:'#602F56'
             
            },
          }}
        /> 


         
       <Stack.Screen
          name="MainTabScreen"
          component={MainTabScreen}
          options={{
            title: ' Hello Mayur, ', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerTitle: (props) => ( 
              <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")}>
<View style={{height: 80,
                width: 440,
                backgroundColor: 'white',
                // elevation: 5,
               top:65,
              //  right:350,
               left:-100,
               marginLeft:20,
               marginRight:-60
                }}>
                  <Text style={{bottom:40,left:100,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Hello Mayur,</Text>
              <View style={{ height: 42,
                width: 280,
                backgroundColor: 'white',
                elevation: 5,
                alignSelf: 'center',
                top:- 29,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                // marginLeft:-30,
                right:25,
                
                marginTop: 30,
                marginBottom:30,
                marginRight:50}}>
                              
                              
                               <TextInput
                                 placeholder="Search with Lorry ID"
                                 
                                 style={{fontSize:14,}}
                               />
                                <Image
                          source={Search}
                          style={{ width: 18,height:18,marginBottom:1,marginLeft:60
                         }}
                        />
                      
              <Card style={{ left:60,top:-1,
                elevation: 5,    
    width:42,
    height:42,
    backgroundColor: 'white',
    alignSelf:"center"}}>
                  
                 
                       
              <Image
                style={{ width: 100, height: 25,right:30,top:8}}
                source={filter}
                resizeMode='contain'
              />
               </Card>
               </View>
              
               </View>
                </TouchableOpacity>
            ),
           
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize:18,
              alignItems:'center',
              color:'#602F56'
             
            },
          }}
        /> 


<Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            title: ' Hello Mayur, ', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerTitle: (props) => ( 
<View style={{height: 80,
                width: 440,
                backgroundColor: 'white',
                // elevation: 5,
               top:65,
              //  right:350,
               left:-100,
               marginLeft:20,
               marginRight:-60
                }}>
                   <Text style={{bottom:40,left:100,fontSize:16,fontFamily:"normal normal bold 16px/20px Inter",
                  fontWeight:"bold",color:"#602F56"}}>Hello Mayur,</Text>
              <View style={{ height: 42,
                width: 250,
                backgroundColor: 'white',
                elevation: 5,
                alignSelf: 'center',
                top:- 29,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                // marginLeft:-30,
                right:35,
                
                marginTop: 30,
                marginBottom:30,
                marginRight:50}}>
                              
                              
                               <TextInput
                                 placeholder="Search with Lorry ID"
                                 
                                 style={{fontSize:14,}}
                               />
                                <Image
                          source={Search}
                          style={{ width: 18,height:18,marginBottom:1,marginLeft:60
                         }}
                        />
                      
              <Card style={{ left:40,top:-1,
                elevation: 5,    
    width:42,
    height:42,
    backgroundColor: 'white',
    alignSelf:"center"}}>
                  
                 
                       
              <Image
                style={{ width: 100, height: 25,right:30,top:8}}
                source={filter}
                resizeMode='contain'
              />
               </Card>
               </View>
               </View>
            ),
           
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize:18,
              alignItems:'center',
              color:'#602F56'
             
            },
          }}
        /> 



      </Stack.Navigator>
   
  );

}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
    
      initialRouteName="VendorName"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
      
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
          
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  
 
  return (
    <NavigationContainer>
      <Drawer.Navigator 
initialRouteName="MainTabScreen"

      drawerContent={props => <DrawerContent {...props} />}
    
        // initialRouteName='MainTabScreen'
        // styles={drawerStyles}
        //  type='static'
        //                 tapToClose={true}
        //                 openDrawerOffset={0.35}
        // drawerContentOptions={{
        //   activeTintColor: 'black',
        //   backgroundColor:"#6495ed",
        //   itemStyle: { marginVertical: 5 },
      
        // }}
        >
        <Drawer.Screen
        // initialRouteName="MainTabScreen"
             headerTitle= {'Ment-Oe'}
          name="Ment-Oe"
          options={{ drawerLabel: 'Ment-Oe' }}
          component={firstScreenStack} />
        {/* <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const drawerStyles = {
  drawer: {
      flex: 1.0,
      backgroundColor: '#000',
      
  },
  main: {
      flex: 1.0,
      backgroundColor: 'white'
  },
  
}