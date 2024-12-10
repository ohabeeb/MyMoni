import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard, Profile, Scan } from '../screens'
import { COLORS, SIZES, icons } from '../constants'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Dashboard'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'transparent',
                    elevation: 0,
                }
            }}>
            <Tab.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.more}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.emerald : COLORS.darkgray,
                            }} />
                    ),
                }}
            />
            <Tab.Screen
                name='Scan'
                component={Scan}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.scan}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.emerald : COLORS.darkgray,
                            }} />
                    )
                }} />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.emerald : COLORS.darkgray,
                            }} />
                    )
                }} />
        </Tab.Navigator>
    )
}