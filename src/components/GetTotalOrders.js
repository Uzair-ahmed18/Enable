import React, { useEffect, useState } from 'react';



const GetTotalOrders = (branch) =>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const myheader = new Headers();
  myheader.append("saasapikey", "RASG5YH-A3D4P9G-N824RBW-QA8XZNE");
  
const requestOptions = {
  method: 'GET',
  headers: myheader,
  redirect: 'follow'
};
var URL = 'https://test-saas.e-butler.com/backend/staging/order?company=';
URL += branch;

  const getOrders = async () => {
     try {
      const response = await fetch(URL, requestOptions
    );

      const json = await response.json();
      setData(json.data.orders);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);
  var q = 0;
  var z = 0;
  var final = 0;
  var highWeeks = 0;
  var data1 = data;

  for (let i = 0; i < data1.length; i++) {
    if (parseInt(data1[i].week) > highWeeks){
      highWeeks = data1[i].week;
    }
  }
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].week == highWeeks){
      q += 1;
    }
  }
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].week == highWeeks - 4){
      z += 1;
    }
  }
  final = q - z;
  final = final/z * 100;
  if (final > 0){
  return "+ " + parseFloat(final).toFixed(2) + " %";
  }
  else{
    return parseFloat(final).toFixed(2) + " %";
  }
  //return data1.length;
}
export default GetTotalOrders;