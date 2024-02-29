import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MyCourseScreen from '../Screens/MyCourseScreen';
import HomeScreen from '../Screens/HomeScreen';
import Color from '../Utils/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Color.PRIMARY
        }}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarLabel: 'Home' // You can provide a custom label if needed
                }}
            />
            <Tab.Screen name='MyCourse' component={MyCourseScreen}
             options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="document-text" color={color} size={size} />
                ),
                tabBarLabel: 'MyCourse' // You can provide a custom label if needed
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen}
             options={{
                tabBarIcon: ({ color, size }) => (
                    // <Ionicons name="profile" color={color} size={size} />
                    <FontAwesome name="user" color={color} size={size} />
                ),
                tabBarLabel: 'Profile' // You can provide a custom label if needed
            }} />
            <Tab.Screen name='Login' component={LoginScreen} 
             options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="finger-print-sharp" color={color} size={size} />
                ),
                tabBarLabel: 'Login' // You can provide a custom label if needed
            }}/>
        </Tab.Navigator>
    );
}
export default TabNavigation;
