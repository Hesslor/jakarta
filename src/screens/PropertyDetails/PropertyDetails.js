import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

const PropertyDetails = () => {

 const navigation = useNavigation();
 const route = useRoute();
 const {property}  = route.params;

  return (
    <View >
        <ScrollView style={style.container}>
        <ImageBackground style={style.propertyImg} source={{uri: property.image}}>
        <LinearGradient 
           style={style.gradientContainer}
           colors={['rgba(255, 255, 255, 0.2)','rgba(255, 255, 255, 0.2)','rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.8)']}
           start={{ x: -0.2, y: -0.8 }}
           end={{ x: -0.5, y: 0.9 }}
           >
          {/*Bottom View*/}
          <View style={style.imgTopView}>
            <TouchableOpacity style={style.imgTopView2} onPress={() => navigation.goBack()}>
              <Image style={style.imgTopIcon} source={require("../../assets/images/left-arrow.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.imgTopView2}>
              <Image style={style.imgTopIcon} source={require("../../assets/images/save.png")}/>
            </TouchableOpacity>
          </View>

          {/*Bottom View*/}
          <View >
            <View style={style.imgTextView}>
              <Text style={style.imgName}>{property.name}</Text>
              <Text style={style.imgDes}>{property.description}</Text>
            </View>

            <View style={style.imgBottomView}>
              <View style={style.imgBottomView2}>
                <View style={style.imgBottomView3}>
                  <Image style={style.imgBottomIcon} source={require("../../assets/images/bedWhite.png")}/>
                </View>
                <Text>{property.bedroom} Bedroom</Text>
              </View>
              <View style={style.imgBottomView2}>
                <View style={style.imgBottomView3}>
                  <Image style={style.imgBottomIcon} source={require("../../assets/images/bathWhite.png")}/>
                </View>
                <Text>{property.bathroom} Bathroom</Text>
              </View>
            </View>
          </View>
          </LinearGradient>
        </ImageBackground>

        <View style={style.desView}>
        <Text style={style.desHead}>Description</Text>
        <Text style={style.desText}>The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars... Show More</Text>
        </View>

        <Contact />
        <Gallery />

        <Image style={style.map} source={{uri: "https://s3-alpha-sig.figma.com/img/283a/ab35/bdf8034cf30d137c478ce73bd08713fd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLJKeZ4PhXHZ~QoJYhtbtRvDnR-vElT3hpnbfnnOiij52lKfk1ubPqcuM2WYAfd5ek0JjnjG4zz0WURMtxseRTuWrgvq9boLlKajpd3ZHZ1zPDOXHTtMMu2gjbmZgdFLIiS5T5I28QR3EHWYlcqp5EKRYmCd~hRIU3zZvFktXuiI3Z3hlIe1NGdLxMMRCkab9qkYL2FEQx~28Trsa6LA3qFbFSpNYIld9hXQNIV1zBra9ZOuqoj4t9KahTKAthjibHYrFZ7CYXTpJlvFdKdvbfqCtK8hAMjkNT1GEb6dQNO302eLFtzMo~aCCUXJvUVUUZxTPOTU3AKjVoQh3E1aLA__"}}/>
      </ScrollView>

        <View style={style.addView}>
        <View>
          <Text style={style.price}>Price</Text>
          <Text style={style.priceAmount}>Rp. {(property.price).toLocaleString({ currency: 'INR'})}/ Year</Text>
        </View>
        <TouchableOpacity style={style.rentView} >
          <Text style={style.rent}>Rent Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PropertyDetails