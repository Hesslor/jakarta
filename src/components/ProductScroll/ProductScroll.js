import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'

const ProductScroll = () => {

    const navigation = useNavigation();
    const properties = [
        {
            Id: 0,
            name: "Orchad House",
            description: "jbiig",
            price: 2500000000,
            bedroom: 6,
            bathroom: 4,
            image: "https://s3-alpha-sig.figma.com/img/3739/b85c/79b000c10d47f525e33f0be4722db6d3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UziDQDT-5Xg3gZnbRJWq6h2dSI4~gzmzVJzErGO63hhASLvyKIVLPM0-HzKP3hUl0JRXpbxj8RpJDi7ezaLEPGZ8-1szNLyusojk6IUr1l1BS50tBMCLZObFv99w5NVkeEhHpnC0eLzA4T4cLmFanEE42vLG6SPM-radzcdNg46TAEi~bCnvvfJH82S5PCoCBFlHDh1j45FDR7V3O6pu2xm-6E2k1hFfn3ZUR8X1aNLz0r74LxflatozQZX-656oUAzZy4iDlEuDOAwMb6hLZ8AcdaPkJa6p75y~3mwLr~RYJLJq6TOcpJe6PR34HaYnfJCMORCcSdbBajFMGkDZ4g__"
        },
        {
            Id: 1,
            name: "The Hollies House",
            description: "jbiig",
            price: 2000000000,
            bedroom: 5,
            bathroom: 2,
            image: "https://s3-alpha-sig.figma.com/img/15c6/6ec2/f6bffc6b811c2d8b71352fb76df17b3a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUVcqtr1~5ly0ab-RiT1RSCxC2nLLmHp8E3Ohjj0rOH6B1FJ6tx6GblU6M-oV6RA4vcVRJvdp4qzubi7YIDVOcdLd5MYyRni96dL90udPxh2WRTBVVfD6b9OMrd3BALLPZFFyrEuNTeA2-Cj8NVwEB8G6S88QjMXoRENDx0ri9G0QeBGEXjtp8Fb6GWhUOU4nuKVAx8CbWRj6D1n5QLbyAZQuYUgNUS7amMPCfIF1PB~zuN7Kwa2ZcGVAMmI2AUTDKRNDxE1VAhbygNzZOBVMwL57OIYMW7BJo9bImiXceCHg4m4thAiiCao1-OXgr3luiOaFZvvO45lP4NHTdVYnw__"
        },
        {
            Id: 2,
            name: "Dreamsville House",
            description: "Jl. Sultan Iskandar Muda",
            price: 2000000000,
            bedroom: 5,
            bathroom: 2,
            image: "https://s3-alpha-sig.figma.com/img/c0b5/b84e/e1d4028e9f2ad18d455cc20f8f30bcce?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8y5sD4t~yew-xq9aRd-z2CU~Igtp7-KoqlVzwpRovklRPMQMkidZvRpjfTCnlPYuT46-gbWh-LxP2dGIKC~7xpmdUwiFn7ZY~J092I1ORtG8WJWfwmRpNrrfe5ZG5ETsCIS~aS7Bt6bAzudl-X31GM4363sZ97Sjc8fvhXE2bI8Rvr4StBafgl-GxZahIPXXDcaDkbeBCr~eOm6~iuDdOYG7qNW9PknJkbVV~9aUMWzuShP57UtbqMNJ2DubfjF9QFSb4~2Bj0wl8h8owt4fRnlBZVVsMKtCU78J1IAF6RVTM1AE8ncAErhkeuiWbvxdlh6Dtr3L-xljEUEpdnNxA__"
        },
        {
            Id: 3,
            name: "Ascot House",
            description: "Jl. Cilandak Tengah",
            price: 2000000000,
            bedroom: 5,
            bathroom: 2,
            image: "https://s3-alpha-sig.figma.com/img/fc2a/22eb/77b12515a6310130b669ed3062ff9bd9?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLV3T8d4oLPwxwPucYZX1OIalW4FWUXCGUcZk5Llm7iVmo4dMwi5BfMfncPWPnbiq1idH0xYtd9hbu-Itq~JO7asFm5EjbJSdh8jTBi32jHBQDqbTcPayZyOg0Oe7Q9zuUggbftqTMJ2xc3lH5UFijNNXHnauHCP~DITHIQ6EiE8aPMZSmokYUw0g-I94J329s8Z2STS8yWzczfi8Wso4uivsaiQ2hT4g5IhWgXFRwSEaD9Yw0erUkqVqaM0SPDZSQv84C02J4umc6VCox3C3mmUczWZbdAVYNAEF-0hmsx1qcM5ltNfXDRbXwiq50jBmfZmXhrKwD2~UriAT5LP1w__"
        },
    ]

  return (
    <FlatList data={properties} showsVerticalScrollIndicator={false} scrollEnabled={false} renderItem={({item,index}) => {

        return (
            <TouchableOpacity key={index} style={style.product} onPress={() => navigation.navigate("PropertyDetails",{property: item})}>
                <View style={style.imageView} >
                 <Image style={style.image} source={{uri: item.image}}/>
                </View>
                <View>
                    <Text style={style.name}>{item.name}</Text>
                    <Text style={style.price}>Rp. {(item.price).toLocaleString({ currency: 'INR'})} / Year</Text>
                    <View style={style.roomView}>
                        <Image style={style.icon} source={require("../../assets/images/bed.png")}/>
                        <Text style={style.roomText}>{item.bedroom} BedRoom  </Text>
                        <Image style={style.icon} source={require("../../assets/images/bath.png")}/>
                        <Text style={style.roomText}>{item.bathroom} BathRoom</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }}/>
  )
}

export default ProductScroll