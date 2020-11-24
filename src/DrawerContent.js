import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Divider,
   
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';
import massage from '../assets/massage.png';
import pickup from '../assets/pickup.png';
import contact from '../assets/contact.png';
export function DrawerContent(props) {

    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
               
                  
                        <View style={{alignItems:'center',backgroundColor:"#602F5680",
                            width:"100%",height:"50%",paddingTop:70,paddingBottom:80}}>
                        <Avatar.Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEFNLBvBHZ16TlhcZZxvjy6lmyatgMFn2LRA&usqp=CAU',
                }}
                size={60}
                style={{marginRight:190,marginBottom:-55}}
              />
                           
                                <Title style={styles.title}>Mayur Patil</Title>
                                <Caption style={styles.caption}>Company Name</Caption>
                            </View>
                      

                       
               
                    <View style={{flex:1,backgroundColor:"#fff",paddingBottom:20}}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={massage}
                                style={{ width: 30, height: 20,marginTop:15,alignSelf:"center"
                                 }}
                                 />
                            )}
                            label="Notification"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                           <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10, }} />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={pickup}
                                style={{ width: 35, height: 30,marginTop:15,alignSelf:"center"
                              }}
                              />
                            )}
                            label="Pickup Schedule"
                            onPress={() => {props.navigation.navigate('PickupRequests')}}
                        />
                        <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10, }} />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                source={contact}
                                style={{ width: 32, height: 32,marginTop:15,alignSelf:"center"
                                   }}
                                 />
                            )}
                            label="Contact Us"
                            // onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <Divider style={{ backgroundColor: '#959DAD',height:1,marginRight:10,marginLeft:10, }} />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
           
                </View>             
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
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
 
            <Text style={styles.TextStyle1}>Logout</Text>
          
             </TouchableOpacity>
           </View>   
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      alignSelf:"center"
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    SubmitButtonStyle1: {
        width:"90%",
        height: 48,
        marginTop:10,
        paddingTop:10,
        paddingBottom:15,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#602F56',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#602F56'
      },
     
      TextStyle1:{
          color:'#fff',
          textAlign:'center',
          fontWeight:"bold",
          fontSize:16,
          fontFamily: "normal normal normal 16px/20px Inter",
         
      },
      
  });
