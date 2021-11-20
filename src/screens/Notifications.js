import { Text, View, StyleSheet} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import axios from 'axios';
import { Checkbox } from 'react-native-paper';
import Button from '../components/button';
Notifications.setNotificationHandler({handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: false, shouldSetBadge: false, })});
async function registerForPushNotificationsAsync() { let token; if (Constants.isDevice) { const { status: existingStatus } = await Notifications.getPermissionsAsync(); let finalStatus = existingStatus; if (existingStatus !== 'granted') { const { status } = await Notifications.requestPermissionsAsync(); finalStatus = status; } token = (await Notifications.getExpoPushTokenAsync()).data; } else { console.log('Must use physical device for Push Notifications'); } if (Platform.OS === 'android') { Notifications.setNotificationChannelAsync('default', { name: 'default', importance: Notifications.AndroidImportance.MAX, vibrationPattern: [0, 250, 250, 250], lightColor: '#FF231F7C', }); } return token; }
function Notifications1() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);

    const notificationListener = useRef();
    const responseListener = useRef();
    useEffect(() => {
        if(Constants.isDevice && Platform.OS !== 'web') {
            registerForPushNotificationsAsync().then(token => {
               axios.post(`https://nativenotify.com/api/expo/key`, { appId: 512, appToken: 'bcDVt8qdFijb3bZbDdqhUr', expoToken: token })
             });
            responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response));
            return () => { Notifications.removeNotificationSubscription(notificationListener); Notifications.removeNotificationSubscription(responseListener); };
          }
        });
    return (
      <View style={{flex:1, paddingTop:50}}>
    <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row', paddingHorizontal:20}}>      

    </View>
    <View style={styles.check}>
       <Text style={{fontSize:16, color:'Blue'}} >{'Cancelled Order Increased '} </Text>
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
      setChecked(!checked);
      }}
    />
 
    </View>

    <View style={styles.check}>
       <Text style={{fontSize:16, color:'Blue'}} >{'Pending Order Increased '} </Text>
      <Checkbox
      onPress={() => {
      setChecked(!checked);
      }}
    />
 
    </View>
        <View style={styles.check}>
       <Text style={{fontSize:16, color:'Blue'}} >{'Pending Pickup Increased '} </Text>
      <Checkbox
      onPress={() => {
      setChecked(!checked);
      }}
    />
 
    </View>
        <View style={styles.check}>
       <Text style={{fontSize:16, color:'Blue'}} >{'Total Orders Decreased '} </Text>
      <Checkbox
      onPress={() => {
      setChecked(!checked);
      }}
    />
 
    </View>
        <View style={styles.check}>
       <Text style={{fontSize:16, color:'Blue'}} >{'Preparing Orders Increased'} </Text>
      <Checkbox
      onPress={() => {
      setChecked(!checked);
      }}
    />
    </View>
    <View style={styles.btnView}>
        <Button  style={styles.materialButtonViolet} title={'Logout'}/>
      </View>
    </View>

    );
  }

export default Notifications1;

const styles =  StyleSheet.create({
  check:{ paddingLeft:50, flexDirection:'row', justifyContent:'space-around',  paddingTop:20, alignItems:'center', },
  btnView:{
    padding:100
  },
  materialButtonViolet: {
    height: 50,
    width: 120,
    backgroundColor: "rgba(33,70,150,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 45,
    marginTop: -193,
    marginLeft: 102
  }
})