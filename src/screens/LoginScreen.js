import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Input from './../components/Input';
import Input2 from './../components/Input2';
import Button from '../components/button';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import Dashboard from './../screens/Dashboard';
import { Formik } from 'formik';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myheader = new Headers();
  myheader.append("saasapikey", "RASG5YH-A3D4P9G-N824RBW-QA8XZNE");
  
const requestOptions = {
  method: 'GET',
  headers: myheader,
  redirect: 'follow'
};

var URL = 'https://test-saas.e-butler.com/backend/staging/user';

  const getMovies = async () => {
     try {
      const response = await fetch(URL, requestOptions
    );

      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }
  var data1 = data;
  useEffect(() => {
    getMovies();
  }, []);


  const checkLogin = (a , b) => {
    var emailExists = false;
    var passwordExists = false;
    console.log(String(a));
    console.log(data1.length);
    for (let i = 0; i < data1.length; i++) {
        if (data1[i].email == a){
          emailExists = true;
        }
  }
  if (emailExists == true && b != ""){
    setEmail("");
    setPassword("");
    return navigation.navigate('BottonTabs', {
      paramKey: a,
    });
  }
    else{
      return alert("Incorrect Email or Password");
    }
  }
  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Image style={styles.slogan} source={require('../assets/slogan.png')} />
      <Text style={styles.text}>STORE MANAGER APP</Text>
      <Text style={styles.login}>Login</Text>
      <View style={styles.inputView}>
        <Input 
          placeholder={'Enter email'}
          onChangeText={text => setEmail(text)}
          value={email}
          label={'Your Email'}
        />
        <Input2 
          placeholder={'Enter password'}
          onChangeText={text => setPassword(text)}
          value={password}
          label={'Password'}
          isPassword={true}
        />
      <View style={styles.btnView}>
        <Button  title={'Login'} onButtonPress={()=>checkLogin(email,password)}  />
      </View>
      </View>
    </View>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop:80
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
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
    fontWeight: '700',
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
    paddingHorizontal:50
    
  },
  btnView:{
    paddingTop:70,
  }
});
