import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import Item from '../components/item';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import GetCompany from '../components/GetCompany';
import GetBranches from '../components/GetBranches';
import GetTotalOrders from '../components/GetTotalOrders';
import GetCancelledOrders from '../components/GetCancelledOrders';
import GetPreparingOrders from '../components/GetPreparingOrders';
import GetPendingPickups from '../components/GetPendingPickups';
import GetPickupOrders from '../components/GetPickupOrders';
import GetDeliveredOrders from '../components/GetDeliveredOrders';
import GetTotalInvoiced from '../components/GetTotalInvoiced';
import GetTotalAmount from '../components/GetTotalAmount';
// var Slider = require('react-native-slider');


const Dashboard = ({route, navigation, paramKey}) => {
  var email = paramKey;
  var comp = GetCompany(email);

    var totalOrders = GetTotalOrders(comp);
    var cancelledOrders = GetCancelledOrders(comp);
    var preparingOrders = GetPreparingOrders(comp);
    var pendingPickups = GetPendingPickups(comp);
    var PickupOrders = GetPickupOrders(comp);
    var deliveredOrders = GetDeliveredOrders(comp);
    var totalInvoiced = GetTotalInvoiced(comp);
    var totalAmount = GetTotalAmount(comp);
  return (
    <View style={styles.container}>    
      <ScrollView>
     
      <View style={styles.itemContainer}>
        <View style={styles.itemView}>
          
         <Item title={'Total Orders'} bgColor ={'#dafbe1'} iconColor={'#6fdd8b'} unfilledColor={'#b3f2c1'} proColor={'#75e68d'}  text={totalOrders}  />
         <Item title={'Total Cancelled'} bgColor ={'#ffeef0'} iconColor={'#fb8f44'} unfilledColor={'#f5c4a2'}  proColor={'#fb8f44'} text={cancelledOrders} />      
        </View>
        <View style={styles.itemView}>
          
          <Item title={'Preparing Orders'} bgColor ={'#c9f0ff'} iconColor={'#59bbe3'} unfilledColor={'#a0daf2'} proColor={'#59bbe3'}  text={preparingOrders}  />
          <Item title={'Pending Pickups'} bgColor ={'#f3d9fc'} iconColor={'#ca83e6'} unfilledColor={'#edcafa'}  proColor={'#e8b9fa'} text={pendingPickups} />      
         </View>
         <View style={styles.itemView}>
          
          <Item title={'PickUp Orders'} bgColor ={'#faedc0'} iconColor={'#edc187'} unfilledColor={'#fcdcb1'} proColor={'#edc187'}  text={PickupOrders}  />
          <Item title={'Delivered Orders'} bgColor ={'#b4c9fa'} iconColor={'#7394d9'} unfilledColor={'#a6c0f5'}  proColor={'#7394d9'} text={deliveredOrders} />      
         </View>
         <View style={styles.itemView}>
          
          <Item title={'Total Invoiced'} bgColor ={'#acecfc'} iconColor={'#8ee0f5'} unfilledColor={'#afebfa'} proColor={'#8ee0f5'}  text={totalInvoiced}  />
          <Item title={'Total Amount'} bgColor ={'#fae7b1'} iconColor={'#ebcf7f'} unfilledColor={'#fae6ac'}  proColor={'#ebcf7f'} text={totalAmount} />      
         </View>
        
        </View>
        </ScrollView>
    </View>
    
    // #b6ddfas
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop:10
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropDownContainer:{
    alignSelf:'center',
    paddingHorizontal:20,
    backgroundColor:'#fff',
    elevation:2

  },
  dropDown:{
      borderColor:'gray',
      borderWidth:0.5,

  },
  totalOrder:{
    backgroundColor:'#dafbe1',
    width:140,
    height:150,
    borderRadius:8,
    padding:10,
    marginVertical:10,
  },
  cancelled:{
    backgroundColor:'#ffeef0',
    width:140,
    height:150,
    borderRadius:8,
    padding:10,
    marginVertical:10,
  },
  text:{
    fontSize:15,
    paddingTop:8,
    color:'#000',
    fontWeight:'700'
  },
  slider:{

  },
  materialIconTextButtonsFooter: {
    height: 83,
    width: 405,
    marginTop: 650,
    marginLeft: -15
  },
});
