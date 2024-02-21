import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from './style'
import Colors from '../Colors'
import LinearGradient from 'react-native-linear-gradient'

const CustomSearch = (props) => {

  const {filter,mic,placeholder,onchange} = {...props}

  useEffect(() => {
    
    updateOrientation();
    // Add event listener for orientation changes
    Dimensions.addEventListener('change', updateOrientation);
  }, [])
  
  const [orientation, setOrientation] = useState(null);
  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setOrientation(width < height ? 'portrait' : null);
  };

  return (
    <View style={filter ? style.containerFilter : style.container}>
        <View style={[style.searchContainer, orientation ? {width: "84%"} : {width: "80%"}]}>
            <View style={style.search}>
                <TouchableOpacity>
                    <Image source={require("../../assets/images/search.png")} style={style.searchIcon} />
                </TouchableOpacity>
               
                <TextInput 
                style={style.input}
                placeholder= {placeholder ? placeholder : 'Search...'}
                placeholderTextColor={Colors.shadow}
                selectionColor={Colors.primaryColor}
                onChangeText={text => onchange(text)}/>

                { mic ?
            <Image source={require("../../assets/images/microphone.png")} style={style.searchIcon} />
            : null }
            </View>
        </View>
        {filter &&
        <TouchableOpacity>
          <LinearGradient 
            style={style.filterView}
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(10, 142, 217, 0.5)']}
            >
         <Image source={require("../../assets/images/filter.png")} style={style.filterIcon} />
         </LinearGradient>
        </TouchableOpacity>}
    </View>
  )
}

export default CustomSearch