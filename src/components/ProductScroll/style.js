import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("window");

const style = StyleSheet.create({
    container: {
        padding: width*0.03,
    },
    product: {
        flexDirection: "row",
        padding: width* 0.02,
        margin: width* 0.02,
        borderRadius: 10,
        gap: width* 0.04,
        overflow: "hidden"
    },
    imageView: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: width* 0.2,
        height: height* 0.1,
        borderRadius: 15,
        overflow: "hidden",
    },
    contentView: {
        width: "70%",
        borderLeftWidth: 1,
        borderColor: Colors.primaryColor,
        paddingLeft: width* 0.02,
    },
    name: {
        fontFamily: "raleway-Regular",
        color: Colors.black,
        fontSize: 18,
    },
    price: {
        color: Colors.primaryColor,
        fontFamily: "raleway-Regular",
        fontSize: 14,
    },
    roomView: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: width* 0.1,
        height: height* 0.05,
        resizeMode: "contain",
    },
    roomText: {
        color: Colors.shadow,
        fontFamily: "raleway-Regular",
        fontSize: 14,
    }
})

export default style;