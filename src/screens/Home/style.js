import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    viewContainer: {
        overflow: "hidden",
    },
    container: {
        backgroundColor: Colors.white,
       overflow: "scroll"
    },
    footerText: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 25,
        padding: 10,
        marginHorizontal: width* 0.03,
    },
    footerBtn: {
        width: width* 0.4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
        padding: width* 0.015,
        marginHorizontal: width* 0.04,
        marginBottom: height* 0.1,
    },
    footerBtnText: {
        color: Colors.white,
        fontFamily: "Raleway-Bold",
        fontSize: 20,
    } 
})

export default style;