import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'


const CommonSectionHeader = props => {

  const navigation = useNavigation();

  const handleSeeAll = () => {
    navigation.navigate("Products")
  }

  return (
    <View style={style.container}>
        <View style={style.headerView}>
          <View>
            <Text style={style.header}>{props.head}</Text>
          </View>
          <TouchableOpacity onPress={handleSeeAll}>
            <Text style={style.seeAll}>{props.sideText}</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
//<Text style={style.headerContent}>{props.content}</Text>

export default CommonSectionHeader