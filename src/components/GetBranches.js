import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


const GetBranches = (company) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myheader = new Headers();
  myheader.append("saasapikey", "RASG5YH-A3D4P9G-N824RBW-QA8XZNE");
  
const requestOptions = {
  method: 'GET',
  headers: myheader,
  redirect: 'follow'
};

var URL = 'https://test-saas.e-butler.com/backend/staging/branch?company=';
URL += company;

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
 
    var branches = [];
    for (let i = 0; i < data.length; i++) {
          branches[i] = {label: data[i].name, value: data[i].id};
  }
  branches  = [{label: 'Al Khor', value: "5fbbc1913164bc7cebf8765d"}, {label: "Al Wakra", value:"5f21336d63e52ed90edfb46b"}]

  return branches;
}
export default GetBranches;