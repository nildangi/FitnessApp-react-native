// import { View, Text } from 'react-native'
// import React from 'react'

// const ProfileScreen = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     )
// }

// export default ProfileScreen

import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyCourseScreen from './MyCourseScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
const ProfileScreen = () => {
    return (
        <View>
            <Text> Hello</Text>
        </View>
    );
}

export default ProfileScreen;
