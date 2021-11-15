import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


const GetCompany = (emailUsed) => {
  const [isLoading1, setLoading1] = useState(true);
  const [data1, setData1] = useState([]);
  const myheader1 = new Headers();
  myheader1.append("saasapikey", "RASG5YH-A3D4P9G-N824RBW-QA8XZNE");
  
const requestOptions1 = {
  method: 'GET',
  headers: myheader1,
  redirect: 'follow'
};

var URL = 'https://test-saas.e-butler.com/backend/staging/user';

  const getOrders = async () => {
     try {
      const response = await fetch(URL, requestOptions1
    );

      const json = await response.json();
      setData1(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading1(false);
    }

  }

  useEffect(() => {
    getOrders();
  }, []);
    var usersList = data1;
    var emailAgain = emailUsed;
    var comp = "";
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email == emailAgain){
          comp = usersList[i].company;
        }
  }

  return comp;
}
export default GetCompany;