// import { View, Text } from 'react-native'
// import React from 'react'

// const MyCourseScreen = () => {
//   return (
//     <View>
//       <Text>MyCourseScreen</Text>
//       <Text>MyCourseScreen</Text>
//     </View>
    
//   )
// }

// export default MyCourseScreen



// import { View, Text } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const MyCourseScreen = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMoviesFromApi = async () => {
//       try {
//         const response = await fetch('https://reactnative.dev/movies.json');
//         const json = await response.json();
//         setMovies(json.movies);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getMoviesFromApi();
//   }, []);

//   return (
//     <View>
//       <Text>MyCourseScreen</Text>
//       {/* Displaying movies */}
//       {movies.map((movie, index) => (
//         <Text key={index}>{movie.title}</Text>
//       ))}
//     </View>
//   );
// };

// export default MyCourseScreen;


import { View, Text } from 'react-native'
import React,  { useEffect } from 'react'
import { useState } from 'react';

const MyCourseScreen = () => {
  const [data,setData]=useState(undefined);
  const getAPIData=async()=>{
    const url = "https://jsonplaceholder.typicode.com/users";
    let result = await fetch(url);
     result = await result.json();
     setData(result)
  }
  useEffect(()=>{
    getAPIData();
  },[])
  return (
    <View>
      <Text>MyCourseScreen:{data.id}</Text>
      {
        data ? <View>
          <Text style={{fontSize:30}}>{data.id}</Text>
      </View>:null
      }
    </View>
    
  )
}

export default MyCourseScreen