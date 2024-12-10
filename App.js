import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stacks from './src/navigations/Stacks'
import { COLORS } from './src/constants'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.lime} />
      <Stacks />
    </NavigationContainer>
  )
}