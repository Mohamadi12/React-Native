import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Color'

const ThemedView = ({style, ...props}) => {
  const colorSchema = useColorScheme()
  const theme = Colors[colorSchema] ?? Colors.light
  return (
    <View style={[{backgroundColor: theme.background}, style]} {...props}/>
  )
}

export default ThemedView