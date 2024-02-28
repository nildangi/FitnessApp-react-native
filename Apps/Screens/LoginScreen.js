import { View, Text, Image } from 'react-native'
import React from 'react'
import Color from '../Utils/Color'


const LoginScreen = () => {
    return (
        <View>
            <Image source={require('../../src/assets/images/rocket.jpg')}
                style={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover'
                }}
            />
            <View style={{padding:20}}>
                <Text style={{fontSize:45,fontWeight:'bold'}}>Welcom To <Text style={{color:Color.PRIMARY}} >CodeBox</Text></Text>
                <Text style={{fontSize:20,
                marginTop:7,
                color:Color.PRIMARY}}>Learn Programming to Build Real Lite Project</Text>
            </View>
            <View>
                <Text>Sign In</Text>
            </View>
        </View>
    )
}

export default LoginScreen