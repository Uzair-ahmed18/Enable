import React, { useEffect, useState } from 'react';



const GetTotalAmount = (branch) =>{
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
      setData(json.data.counts);
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
  var sign = "";
  var data1 = data;
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].name == "Total Amount"){
      q = data1[i].change;
      if (data[i].change_direction == "up"){
          sign = "+ ";
      }
      else {
          sign = "- ";
      }
    }
  }
  q = parseInt(q);
  return sign + parseFloat(q).toFixed(2) + " QAR";
}
export default GetTotalAmount;