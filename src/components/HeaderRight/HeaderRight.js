import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Share, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useSelector } from 'react-redux'

const HeaderRight = props => {
    const navigation = useNavigation();
    const cartCount = useSelector(state => state.cartCount);

    const handleShare =async () => {
        const result = await Share.share({
          message:
            'React Native',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
    }

    return (
        <View style={style.container}>
            {props.share &&
            <TouchableOpacity onPress={() => handleShare()}>
                <Image style={style.cartImage} source={require("../../../assets/images/share.png")} />
            </TouchableOpacity> 
            }
            {props.add &&
            <TouchableOpacity onPress={props.handleAddIcon}>
                <Image style={style.cartImage} source={require("../../../assets/images/add.png")} />
            </TouchableOpacity> 
            }
            {props.cart && 
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <Image style={style.cartImage} source={require("../../../assets/images/cartPurple.png")} />
                <View style={style.countView}>
                  <Text style={style.count}>{cartCount}</Text>
                </View>
            </TouchableOpacity>}
        </View>
        
    )
}

export default HeaderRight