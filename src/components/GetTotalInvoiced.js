import React, { useEffect, useState } from 'react';



const GetTotalInvoiced = (branch) =>{
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
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var d = new Date();
  var cmonth = months[d.getMonth()];
  var cDay = d.getDate();
  var cyear = d.getFullYear()
  var q = 0;
  var sign = "";
  var data1 = data;
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].month == cmonth && data1[i].day == cDay && data1[i].year == cyear){
      q += data1[i].invoiced_amount;
    }
  }
  if (q > 0){
    sign = "+ ";
  }
  return sign + q + " QAR";
}
export default GetTotalInvoiced;