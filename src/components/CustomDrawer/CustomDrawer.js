import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { useDispatch, useSelector } from 'react-redux'
import { SignOut } from '../../storage/actions'

const CustomDrawer = (props) => {

  const navigation = useNavigation();
  const dispatch  = useDispatch();


  const [selected, setSelected] = useState(
    {
    Id: 0,
    name: "Home",
    navigateTo: "Home",
  }
);

  const Content1 = [
    {
      Id: 0,
      name: "Home",
      navigateTo: "Home",
    },
    {
      Id: 1,
      name: "Profile",
      navigateTo: "Categories",
    },
    {
      Id: 2,
      name: "Nearby",
      navigateTo: "Orders",
    },
    {
      Id: 3,
      name: "Bookmark",
      navigateTo: "Home",
    },
    {
      Id: 4,
      name: "Notification",
      navigateTo: "Categories",
    },
    {
      Id: 5,
      name: "Message",
      navigateTo: "Orders",
    },
    {
      Id: 6,
      name: "Settings",
      navigateTo: "Home",
    },
    {
      Id: 7,
      name: "Help",
      navigateTo: "Categories",
    },
    {
      Id: 8,
      name: "Logout",
      navigateTo: "Orders",
    },
  ]

  const handleSignOut = () => {
    dispatch(SignOut())
  }

  return (
    <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
    <View style={style.container}>
        <View style={style.contents}>
            {Content1.map((item,index) => {

              const isFocused = item.Id == selected.Id;

              const icon = item.name === "Home" ? isFocused ? require("../../assets/images/homeB.png") : require("../../assets/images/home.png") : 
              item.name === "Profile" ? isFocused ? require("../../assets/images/userB.png") : require("../../assets/images/user.png") :
              item.name === "Nearby" ? isFocused ? require("../../assets/images/locationB.png") : require("../../assets/images/location.png") :
              item.name === "Bookmark" ? isFocused ? require("../../assets/images/saveB.png") : require("../../assets/images/save.png") : 
              item.name === "Notification" ? isFocused ? require("../../assets/images/alarmB.png") : require("../../assets/images/alarm.png") :
              item.name === "Message" ? isFocused ? require("../../assets/images/chatB.png") : require("../../assets/images/chat.png") :
              item.name === "Settings" ? isFocused ? require("../../assets/images/settingB.png") : require("../../assets/images/setting.png") : 
              item.name === "Help" ? isFocused ? require("../../assets/images/questionB.png") : require("../../assets/images/question.png") :
              item.name === "Logout" ? isFocused ? require("../../assets/images/power-offB.png") : require("../../assets/images//power-off.png") : "";
              
              //item.name == "Nearby" ? { borderBottomColor: "white", borderBottomWidth: 0.5, paddingBottom: 25,} :
              //item.name == "Message" ? {borderBottomColor: "white", borderBottomWidth: 0.5, paddingBottom: 25,} : null
              return (
                <>
                <TouchableOpacity key={index} onPress={ item.name == "Logout" ? handleSignOut : 
                () => { 
                  setSelected(item); 
                  navigation.navigate(item.navigateTo)
                  }}>
                  <View style={[isFocused ? style.selectedContent : style.content]}>
                    <Image source={icon} style={style.icon}/>
                    <Text style={isFocused ? style.selectedText : style.text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                {item.name === "Nearby" ? <View style={style.line}/> : item.name === "Message" ? <View style={style.line}/> : null}
                </>
              )
            })}
        </View>
    </View>
    </ScrollView>
  )
}

export default CustomDrawer