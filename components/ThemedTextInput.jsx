import { TextInput, useColorScheme } from 'react-native';
import { Colors } from '../constants/Color';

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const color = Colors[colorScheme] ?? Colors.light
  return (
    <TextInput 
        style={[
            {
            backgroundColor: color.uiBackground,
            color: color.text,
            padding: 20,
            borderRadius: 6
            },
            style,
        ]}
        {...props} // Spread the rest of the props to the TextInput
    />
  )
}

export default ThemedTextInput