import React from 'react'
import { Image, Text, View } from 'react-native'
import style from './style'

const Contact = () => {
  return (
    <View style={style.container}>
        <View style={style.profileView}>
            <View style={style.profileView2}>
                <Image style={style.profile} source={{uri: "https://s3-alpha-sig.figma.com/img/ebd1/f255/26652d4ef5745a41a8c6cceaaa96ffac?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fH8KMUJ075VLBcbtsVaaEpaLyPUxvSvsWfefFYmvldHgCPXmOQWVviL8DqkCPpT-Gyys8BmST0GBR0ey8cnV9muWH~BUIPeZut7hiCsS2K9DrzrnibZIBsy1a9c7QMG2BClSLaqKJBI9foJ8zdNHmH9JjOCVRkKhukvJimn302AavGPvtQc9ha8xkXLhrJSysBUl~HqK47IuoNYZAr2VcQWIvvYQRdP7s2D3c8xn9rPKpq49aUyOa-BqGES-VnYZD2U9S4NsvlDsucUbMp2C0r8UXbN4RvFoRaH2COk3PrieKfvMJzmQ-17YcZzD8NdTftFs0UD~zpo1uEaap77Isw__"}}/>
            </View>
            <View style={style.textView}>
                <Text style={style.name}>Garry Allen</Text>
                <Text style={style.owner}>Owner</Text>
            </View>
        </View>
        <View style={style.iconView}>
            <View style={style.iconView2}>
                <Image style={style.icon} source={require("../../../../assets/images/phone-call.png")}/>
            </View>
            <View style={style.iconView2}>
                <Image style={style.icon} source={require("../../../../assets/images/communication.png")}/>
            </View>
        </View>
    </View>
  )
}

export default Contact