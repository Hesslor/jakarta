import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {height: "100%"},
    topBg: {
        width: "100%",
        height: height*0.2,
        resizeMode:"cover",
    },
    scrollView: {
        flex: 1,
        backgroundColor: Colors.white,
        overflow: "hidden",
        padding: width*0.06,
    },
    logo: {
        width: width* 0.7,
        height: width* 0.3,
        resizeMode: "contain",
        alignSelf: "center",
    },
    loginText: {
        fontFamily: "Raleway-Bold",
        color: Colors.black,
        fontSize: 25,
    },
    NavigateTo: {
        fontFamily: "Raleway-Regular",
        color: Colors.white2,
        fontSize: 14,
        textAlign: "center",
        marginVertical: width* 0.025,
    },
    errorText: {
        color: Colors.red,
        fontFamily: "Raleway-Regular",
        fontSize: 14,
        marginTop: 5,
    },
})

export default style;