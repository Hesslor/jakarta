import React from 'react'
import { View, Image, TouchableOpacity, Text} from "react-native"
import style from './style'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View>
        <Text style={style.location}>Location</Text>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={style.headerView}>
            <Text style={style.headerText}>Jakarta</Text>
            <Image source={require("../../assets/images/down.png")} style={style.down}/>
          </View> 
        </TouchableOpacity>
      </View>
  
      <Image source={require("../../assets/images/alarmBlack.png")} style={style.icon}/>
    </View>
  )
}

export default Header