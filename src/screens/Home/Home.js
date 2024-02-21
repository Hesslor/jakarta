import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../components/commonHeader/Header'
import CustomSearch from '../../components/CustomSearch/CustomSearch'
import style from './style'
import CategoryTab from './components/CategoryTab/CategoryTab'
import CommonSectionHeader from '../../components/commonSectionHeader/CommonSectionHeader'
import Banner from '../../components/Banner/Banner'
import ProductScroll from '../../components/ProductScroll/ProductScroll'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'

const Home = () => {

  const drawerProgress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {

    const scale = interpolate(
      drawerProgress.value,
      [0,1],
      [1, 0.8]
    )
    
    const borderRadius = interpolate(
      drawerProgress.value,
      [0,1],
      [0,20],
    )

    return {
      transform: [{scale}], borderRadius,
    }
  })

  const handleSearch = () => {}

  return (
    <Animated.View style={[style.viewContainer,viewStyle]}>
      <ScrollView style={style.container} nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Header />
        <CustomSearch filter={true} onchange={handleSearch}/>
        <CategoryTab />
        <CommonSectionHeader head={"Nearby"} sideText={"see more"}/>
        <Banner />
        <CommonSectionHeader head={"Best for you"} sideText={"see more"}/>
        <ProductScroll />

        <Text style={style.footerText}>Didn't find what you are looking for</Text>
        <TouchableOpacity style={style.footerBtn}>
          <Text style={style.footerBtnText}>Categories</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  )
}

export default Home