import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../Utils/Color'
import HomeScreen from './HomeScreen'
import MyCourseScreen from './MyCourseScreen'


const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Image source={require('../../src/assets/images/rocket.jpg')}
                style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover'
                }}
            />
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 45, fontWeight: '900' }}>Welcome To
                    <Text style={{ color: Color.PRIMARY }} > CodeBox</Text></Text>
                <Text style={{
                    fontSize: 20,
                    marginTop: 7,
                    color: Color.GRAY
                }}>Learn Programming to Build Real Lite Project</Text>
                {/*Sign In button */}
                <TouchableOpacity onPress={() => navigation.navigate('MyCourseScreen')} style={styles.button}>
                    <Text style={{
                        textAlign: 'center',
                        color: Color.WHITE, fontSize: 18
                    }}>Sign In</Text>
                </TouchableOpacity>         
                <TouchableOpacity onPress={()=>console.warn("Hello")}>
                    <Text style={{ marginTop: 10, color: Color.PRIMARY, textAlign: 'center', fontSize: 16 }}>Create New Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 16,
        backgroundColor: Color.PRIMARY,
        borderRadius: 99,
        marginTop: 60
    }
})


export default LoginScreen