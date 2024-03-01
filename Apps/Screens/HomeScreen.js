import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCourseScreen from './MyCourseScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
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
            console.log("reject", err);
          });
      };
    return (
      <View style={{flex:1}}>

        <ScrollView style={{margin:10}}>
        {
      myData.map((item, index) => (
            <View style={{flex:1,flexDirection:"row",height:150, borderRadius:15, width:"100%", backgroundColor:"#7fffd4", marginVertical:10}}>
                <View style={{flex:1, justifyContent:"center", alignItems:"center",flexDirection:"row", marginHorizontal:5}}>
                    <View style={{flex:1}}>

                <Image
          style={{height:70, width:70, borderRadius:70}}
          source={{uri:item.image}} />
                    </View>

          <View style={{flex:1}}>
    <Text style={{flex:1,textAlign:"center", fontSize:16, color:"black", justifyContent:"center",alignItems:"center"}}>{item.brand}</Text>
    <Text style={{flex:1,textAlign:"center", fontSize:16, color:"black"}}>{item.name}</Text>

          </View>
                </View>
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    <Text style={{textAlign:"center", fontSize:16, color:"black"}}>{item.category}</Text>
                    </View>
            </View>
      ))}
        </ScrollView>
      </View>
    );
}

export default HomeScreen;
