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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyCourseScreen from './MyCourseScreen';

const Tab = createBottomTabNavigator();
const ProfileScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="MyCourse" component={MyCourseScreen} />
        </Tab.Navigator>
    );
}

export default ProfileScreen;
