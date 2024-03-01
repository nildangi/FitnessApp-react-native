/* import { View, Text } from 'react-native'
import React from 'react'
const MyCourseScreen = () => {
  return (
    <View>
      <Text>MyCourseScreen</Text>
      <Text>MyCourseScreen</Text>
    </View>
  )
}
export default MyCourseScreen


normal fetch api 
import { View, Text } from 'react-native'
import React,  { useEffect } from 'react'
import { useState } from 'react';
const MyCourseScreen = () => {
  const [data,setData]=useState(undefined);
  const getAPIData=async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
     result = await result.json();
     setData(result)
  }
  useEffect(()=>{
    getAPIData();
  },[])
  return (
    <View>
      <Text>MyCourseScreen</Text>
      {
        data ? <View>
          <Text style={{fontSize:30}}>hello{data.id}</Text>
          <Text style={{fontSize:30}}>hello{data.userId}</Text>
          <Text style={{fontSize:30}}>hello{data.title}</Text>
          <Text style={{fontSize:30}}>hello{data.body}</Text>
      </View>:null
      }
    </View> 
  )
}
export default MyCourseScreen */

//Normal API with AXIOS
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NativeScreenContainer } from 'react-native-screens'
const MyCourseScreen = () => {
  useEffect(() => {
    getData();
  }, [])
  const [myData, setMyData] = useState([]);
  // const getData = async () => {
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  //   console.log(res.data)
  // }
  const getData = () => {
    axios
      .get('https://api.aforro.radixforce.com/api/product/list/',
        //  {
        //   headers: {
        //     Authorization: 'Bearer ',
        //   },
        // }
      )
      .then(res => {
        console.log("PPPPPP", res.data.result);
        setMyData(res.data.result)

      })
      .catch(err => {
        // console.log("reject", err);
      });
  };
  return (
    <>
    {
      myData.map((item, index) => (
        <ScrollView style={styles.mainStyle}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.imageStyle}
          source={require('../../src/assets/images/rocket2.jpg')} />
        <View style={{ flexDirection: 'column', marginLeft: 40 }}>
          <Text style={{ fontWeight: '900' }}>user name</Text>
   
              <Text
                style={{ fontWeight: '900', marginRight: 15 }} key={index}>Name-{item.name}</Text>
      
        </View>
        <View >
          <Text style={{ fontWeight: '900', }}> public_id</Text>
          <Text style={{ fontWeight: '900' }}> category</Text>
        </View>
        <Text style={{ marginTop: 50, marginLeft: 150 }}>category_id</Text>
      </View>
    </ScrollView>
      ))}
      </>

  )
}
export default MyCourseScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 0.2, 
    backgroundColor: '#7fffd4', 
    margin: 20, 
    borderRadius: 15

  },
  imageStyle: {
    height: 100, 
    width: 100, 
    marginLeft: 20, 
    borderRadius: 50
  }
})