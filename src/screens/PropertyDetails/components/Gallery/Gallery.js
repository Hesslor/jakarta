import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import style from './style'

const Gallery = () => {

    const images = [
        {
            Id: 0,
            img: "https://s3-alpha-sig.figma.com/img/0682/1532/d5809aa9ac94ac1f23aa7f090ac62c4b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcd4fWWulgPZx0Y4PNdDj5eWroCvf4dzMlGr5WK5prR6u~Sxkb9reqKRMVfFzz366fJD70idDZUY-j~Ly6hP-ojHijNf5DF6uQJoWJnQnkj~bNUPX2sa7JLxkGZErJaoerM352B9g82KjiRe12CQJeGhpB3zr-tgAkqyznRhhq-Ryupu74NdzQzrEFJFCRZOtzCWm8il3vUPU5KMKlukHuin7tdJUKTJOHyaTr8OZGbuMXT2RHygwV-SAW6zLhDFywN0PoN1AdZatuG7R95qApqDY4ukxEIUb4qYrNIwt4Y51BYorkcAv6Ly0L5WLOSfcy7V46w3WdPtSbMrSrAZuA__"
        },
        {
            Id: 1,
            img: "https://s3-alpha-sig.figma.com/img/b63e/f9e2/335b2715fb1ccc3611772d4967a699b3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Frz6Z0loNO-wgDihH4W~mPukQU0dVlJGS~1QWNKSFzXZKMUai7KOjC9UHc2PUL3gvcRSloC4GmkmECqr21GnSAk62pSS-w-RZcmQWveFMsUBF~1bTXwbnYtYWMd-lXbjxxS4deZSyitn5SZaR~HQYBfTewHa4pLMi1NDFbh-uFdpcwFo1HJxynHVabb2mNVX0j-~Ycw9Uiw8V1iOUTAZNj4fhZfIBxKksXlsJ5kP18LQN5CdN1WH8UjTWDpL-pgCg20J4MUaE9mLwdRIKek19XHEdEeF-vTmbecoxorewXaTZDrzQo6qf7F31MUCj1pKiCClmyLGzZYGJ28vlLsgGQ__"
        },
        {
            Id: 2,
            img: "https://s3-alpha-sig.figma.com/img/51ba/ef7e/36b38a5a5033616306a80c632fd1cc57?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-pKA-vtaDy9AYrmb9Vz2264m-ahcuT-lnEKKNH~2UamQXt6kqW0otFscpsCk8GsNTd-hAgLJIwDzBbufp2SLtrgQhcneLgYdML1wx0bbtq6ZvN6PXzpIx0MQ~FdwOnigwRzzTxbcKh~aOmfyxw0kh4aUVeoO6kNuX4TLEFN5VUIlXy4iLhe8AMdQY3YeUbGjfUj9DPwL9kcXv8M4-ZtqwbBgndss~JYF~WQBXyFh-vK-PwNaNTDLiTZETmvM63Rm8iRYrFF~NMtdYN1SAw3VCV3IWLSr-wEdz7O6rSVuYseFEimHCR-eHJTCgty5p9f6G4vUe4-dqTyu90WH8mZRg__",
        },
        {
            id: 3,
            img: "https://s3-alpha-sig.figma.com/img/5040/914e/838ea2fcef1e5d03a06fbba226a82c4a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu5t1VBpOHPJCNr4ynpIMuHms-1n2SyawJlVuwCM-XazezqvftarL0KLZTMzU4gnnx9oNuOo0YnfK0q08570zwQR1uy2b-RW5akmmQhov~XgaQUvuVSgcCwrZm-3b5di~HwLl-IqwABs7A0wG1rym3yiU55I-rxGmOcWpnNMTjcZi8duTFaOj7k6Lq6RhibcI0HBlPsIkwhgwzJdTeL9S4vj6kD7fJIPOZzDi~Z5IpEOtQODCWV8r7hNQStbkd4e-uky~INRzOeqbdGVAwngW7mhWsbp3rPOB7GmKpP-vPU8dhbXXQo61glkCFsl2BEq69jHYhzR-~I96LlkZ648bA__",
        }
    ]

  return (
    <View>
        <Text style={style.header}>Gallery</Text>
        <FlatList data={images} style={style.flatList} contentContainerStyle={style.container} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => {
            return (
                <View style={style.imageView} >
                    <Image style={style.image} source={{uri: item.img}} />
                </View>
            )
        }}/>
    </View>
  )
}

export default Gallery