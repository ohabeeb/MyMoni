import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Scan, SignUp } from '../screens'
import Tabs from './Tabs'

const Stack = createNativeStackNavigator()

export default function Stacks() {
    return (
        <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Tabs' component={Tabs} />
            <Stack.Screen name='Scan' component={Scan} />
        </Stack.Navigator>
    )
}