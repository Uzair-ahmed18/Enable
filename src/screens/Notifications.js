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
const Notifications1 = ({navigation}) => {
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
      <View style={{flex:1, paddingTop:30}}>
    <View style={{justifyContent:'center',alignItems:'center', flexDirection:'row', paddingHorizontal:10, marginBottom:20}}> 
    <Text style={{fontSize:25, color:'blue', fontWeight:'bold'}} >{'Select Notification Preference'} </Text>       

    </View>
    <View style={styles.check}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      
      onPress={() => {
      setChecked(!checked);
      }}
    />
       <Text style={{fontSize:16, color:'black', fontWeight:'bold'}} >{'Cancelled Orders Increase/Decrease '} </Text>
 
    </View>

    <View style={styles.check}>
    <Checkbox
      status={checked2 ? 'checked' : 'unchecked'}
       
      onPress={() => {
      setChecked2(!checked2);
      }}
    />
       <Text style={{fontSize:16,color:'black',  fontWeight:'bold'}} >{'Pending Orders Increase/Decrease'} </Text>
 
    </View>
        <View style={styles.check}>
        <Checkbox
      status={checked3 ? 'checked' : 'unchecked'}

      onPress={() => {
      setChecked3(!checked3);
      }}
    />
       <Text style={{fontSize:16,color:'black',  fontWeight:'bold'}} >{'Pending Pickups Increase/Decrease'} </Text>
 
    </View>
    
        <View style={styles.check}>
        <Checkbox
      status={checked4 ? 'checked' : 'unchecked'}

      onPress={() => {
      setChecked4(!checked4);
      }}
    />
       <Text style={{fontSize:16, color:'black',fontWeight:'bold'}} >{'Total Orders Increase/Decrease '} </Text>
 
    </View>
    
        <View style={styles.check}>
        <Checkbox
      status={checked5 ? 'checked' : 'unchecked'}

      onPress={() => {
      setChecked5(!checked5);
      }}
    />
       <Text style={{fontSize:16, color:'black', fontWeight:'bold'}} >{'Preparing Orders Increase/Decrease'} </Text>
 
    </View>

    <View style={styles.btnView}>
        <Button  style={styles.materialButtonViolet} title={'Logout'} onButtonPress={()=>navigation.navigate('LoginScreen')}/>
      </View>
    </View>

    );
  }

export default Notifications1;

const styles =  StyleSheet.create({
  check:{ paddingLeft:20, flexDirection:'row', justifyContent:'flex-start',  paddingTop:20, alignItems:'center', },
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