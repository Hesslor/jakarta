import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import style from './style'

const CategoryTab = () => {

  const [selected, setSelected] = useState([]);

    const categories = [
        { 
          id: 0,
          name: "House"
        },
        {
          id: 1,
          name: "Apartment"
        },
        {
          id: 2,
          name: "Hotel"
        },
        {
          id: 3,
          name: "villa"
        },
        {
          id: 4,
          name: "Resort"
        },
    ]

  return (
    <FlatList data={categories} 
      horizontal 
      style={style.CategoryContainer}
      showsHorizontalScrollIndicator={false} 
      renderItem={({item,index}) => {

        const isFocused = index == selected.id

        return (
          <TouchableOpacity onPress={() => setSelected(item)}>
            { isFocused ? 
            <LinearGradient 
            style={style.selectedView}
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(10, 142, 217, 0.5)']}
            >
           <Text style={style.selectedText}>{item.name}</Text>
           </LinearGradient> :
           <View style={style.categoriesView}>
            <Text style={style.categoriesText}>{item.name}</Text>
           </View>
           }

          </TouchableOpacity>
        )
      }}/>
  )
}

export default CategoryTab