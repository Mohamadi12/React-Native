import { Image, useColorScheme } from 'react-native'
import DarkLogo from "../assets/img/logo.jpeg"
import LightLogo from "../assets/img/salt.png"

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo