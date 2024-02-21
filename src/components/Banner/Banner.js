import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style'
import LinearGradient from 'react-native-linear-gradient';

const Banner = () => {

    const [bannerItems,setBannerItems] = useState([]);

    useEffect(() => {
      getBanners();

      updateOrientation();
      // Add event listener for orientation changes
      Dimensions.addEventListener('change', updateOrientation);
    }, [])

    const [orientation, setOrientation] = useState(null);
    const updateOrientation = () => {
        const { width, height } = Dimensions.get('window');
        setOrientation(width < height ? 'portrait' : null);
      };
    
    const getBanners = async () => {
        await firestore().collection('Banners')
        .get()
        .then(snapshot => {
            if(!snapshot.empty) {
                const result = [];
                snapshot.docs.map((item) => {
                    result.push(item.data())
                })
                setBannerItems(result)
            }
        })
        .catch(err => {
            console.log(err)
        }) 
    }

  return (
    <View style={style.container}>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={bannerItems} renderItem={({item,index}) => {
            return(
                <ImageBackground key={index} source={item.image == null ? require("../../assets/images/logo.png") : {uri: item.image}} style={orientation ? style.backgroundImage : style.LbackgroundImage}>
                    <LinearGradient 
                     style={style.gradientContainer}
                     colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.8)']}
                     start={{ x: -0.2, y: -0.8 }}
                     end={{ x: -0.5, y: 0.9 }}
                     >
                    <View style={style.textContainer}>
                        <Text style={style.head} numberOfLines={1}>{item.head}</Text>
                        <Text style={style.description}>{item.description}</Text>
                    </View>
                    </LinearGradient>
                </ImageBackground>
            )
        }} />
    </View>
  )
}

export default Banner;