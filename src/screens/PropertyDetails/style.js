import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: Colors.white2,
    },
    propertyImg: {
        width: width* 0.88,
        height: height* 0.36,
        borderRadius: 18,
        marginVertical: height* 0.02,
        overflow: "hidden",
        alignSelf: "center",
    },
    gradientContainer: {
        flex: 1,
        padding: width* 0.055,
        justifyContent: "space-between"
    },
    imgTopView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imgTopView2: {
        backgroundColor: Colors.shadow2,
        padding: width* 0.02,
        borderRadius: width* 0.5,
    },
    imgTopIcon: {
        width: width* 0.07,
        height: height* 0.028,
        resizeMode: "contain",
    },

    imgTextView: {
        marginBottom: width* 0.05,
    },
    imgName: {
        color: Colors.white,
        fontFamily: "Raleway-Bold",
        fontSize: 20,
    },
    imgDes: {
        color: Colors.white,
        fontFamily: "Raleway-Regular",
        fontSize: 13,
    },
    imgBottomView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.05,
    },
    imgBottomView2: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.02,
    },
    imgBottomView3: {
        backgroundColor: Colors.shadow2,
        borderRadius: width* 0.02,
    },
    imgBottomIcon: {
        width: width* 0.08,
        height: height* 0.03,
        resizeMode: "contain",
    },

    desView:{
        paddingHorizontal: width* 0.05,
        gap: width* 0.03,
    },
    desHead: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 20,
    },
    desText: {
        color: Colors.black,
        fontFamily: "Raleway-Regular",
        fontSize: 13,
    },

    //map
    map: {
        width: width*0.9,
        height: height* 0.4,
        alignSelf: "center",
        marginVertical: height* 0.03,
    },

    //add view
    addView: {
        width: width* 0.9,
        position: "absolute",
        bottom: width* 0.04,
        alignSelf: "center",
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: width* 0.03,
        borderRadius: width* 0.02,
    },
    
    price: {
        color: Colors.black,
        fontFamily: "Raleway-Regular",
        fontSize: 12,
    },
    priceAmount: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 17,
    },
    rentView: {
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: width* 0.03,
        paddingVertical: width* 0.015,
        borderRadius: width* 0.02,
    },
    rent: {
        color: Colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 18,
    }
})

export default style;