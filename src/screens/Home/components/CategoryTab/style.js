import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../../../components/Colors";


const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
   
    CategoryContainer: {
        paddingVertical: width* 0.01,
    },
    categoriesView: {
        paddingHorizontal: width* 0.03,
        paddingVertical: width* 0.012,
        margin: width* 0.02,
        backgroundColor: Colors.white2,
        borderRadius: 10,
    },
    selectedView: {
        paddingHorizontal: width* 0.03,
        paddingVertical: width* 0.01,
        margin: width* 0.02,
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,

        shadowColor: Colors.primaryColor,
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.19,  
        elevation: 13,
    },
    categoriesText: {
        color: Colors.shadow,
        fontSize: 16,
        fontFamily: "Raleway-Regular"
    },
    selectedText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: "Raleway-Regular",
    },

    /*products*/
    productContainer: {
        paddingTop: width* 0.02,
        paddingBottom: width* 0.38,
    },
    product: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        padding: width* 0.02,
        margin: width* 0.022,
        borderRadius: 10,
        gap: width* 0.04,
        overflow: "hidden"
    },
    imageView: {
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: width* 0.15,
        height: height* 0.06,
        resizeMode: "contain",
    },
    contentView: {
        width: "70%",
        borderLeftWidth: 1,
        borderColor: Colors.primaryColor,
        paddingLeft: width* 0.02,
    },
    productName: {
        fontFamily: "Raleway-Bold",
        color: Colors.black,
        fontSize: 18,
    },
    productContent: {
        fontFamily: "Raleway-Regular",
        color: Colors.black,
        fontSize: 14,
    },
    priceView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceView2: {
        flexDirection: "row",
        gap: width* 0.02,
        alignItems: "center"
    },
    price: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 14,
    },
    offerView: {
        fontFamily: "Raleway-Bold",
        fontSize: 15,
        backgroundColor: Colors.primaryColor,
        color: Colors.white,
        paddingHorizontal: width* 0.03,
        paddingVertical:  width* 0.01,
        borderRadius: 10,
    },
    qView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: Colors.lightPurple,
        borderRadius: 10,
        paddingHorizontal: width* 0.04,
        gap: width* 0.03
    },
    qText1: {
        color: Colors.primaryColor,
        fontFamily: "Raleway-Bold",
        fontSize: 15,
    },
    qText2: {
        color: Colors.primaryColor,
        fontFamily: "Raleway-Bold",
    },
    //empty
    emptyView: {
        height: height*0.5,
        width: width*1,
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: width* 0.05,
    },
    emptyText: {
        color: Colors.shadow,
        fontFamily: "Raleway-Bold",
        fontSize: 28,
    },
})

export default style