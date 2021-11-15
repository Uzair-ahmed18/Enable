import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Input from './../components/Input';
import Input2 from './../components/Input2';
import Input3 from './../components/Input3';
import Button from '../components/button';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Dashboard from './../screens/Dashboard';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';

const Feedback = () => {
  
  const [Title, setTitle] = useState('');
  const [Details, setDetails] = useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([{label: 'Report Bug', value: "Report Bug"}, 
  {label: "General Complaint", value:"General Complaint"}, 
  {label: "Suggestions", value:"Suggestions"}]);
  const myheader = new Headers();
  myheader.append("saasapikey", "RASG5YH-A3D4P9G-N824RBW-QA8XZNE");
  
const requestOptions = {
  method: 'POST',
  headers: myheader,
  redirect: 'follow'
};

var URL = 'https://test-saas.e-butler.com/backend/staging/admin/feedback';


  const checkLogin = (a , b) => {
    var emailExists = false;
    var passwordExists = false;
    if (Details == "" || Title == "" || value == null){
      return alert ("Error: One or More Fields are Empty")
    }
    setDetails("");
    setTitle("");
    setValue(null);
  if (emailExists == false){

    return alert("Successfully Submitted"), console.log(value,Title,Details);
  }
    else{
      return null;
    }
  }
  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>

    <Text style={styles.textNew}>Let Us Hear From You!</Text>
      <View style={styles.inputView}>
      <DropDownPicker
      placeholder="Select The Category"
      style={styles.dropDown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{elevation:3}}
      
    />   
        <Input 
          placeholder={'E.g. Error with Notifications'}
          onChangeText={text => setTitle(text)}
          value={Title}
          label={'Title'}
        />
        <Input3
          placeholder={'E.g. My total orders do not match the orders on the Enable Website'}
          onChangeText={text => setDetails(text)}
          value={Details}
          label={'Provide Details Here'}
        />
      <View style={styles.btnView}>
        <Button  style={styles.materialButtonViolet} title={'Submit'} onButtonPress={()=>checkLogin(Title,Details)}  />
      </View>
      </View>
    </View>
    </KeyboardAvoidingWrapper>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(253,253,253,1)",
    borderRadius: 100
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  textNew: {
    color: "#121212",
    fontSize: 30,
    marginTop: 40,
    alignSelf: 'center',
  },
  slogan: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    alignSelf: 'center',
    bottom:50,
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    bottom:110,
    color:'#005ae0'
  },
  text2: {
    fontSize: 16,
    color: 'gray',
    alignSelf:'center',
    bottom:80
  },
  login:{
    fontSize:16,
    alignSelf:'center',
    bottom:100,
    fontWeight:'700'
  },
  inputView:{
    paddingHorizontal:20,
    marginTop:70
    
  },
  btnView:{
    paddingTop:70,
  },
  materialButtonViolet: {
    height: 50,
    width: 171,
    backgroundColor: "rgba(33,70,150,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 45,
    marginTop: -193,
    marginLeft: 102
  },
  dropDown:{
    borderColor:'black',
    borderWidth:0.5,

}
});
