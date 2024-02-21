import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {height: "100%"},
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
    createNew: {
        fontFamily: "Raleway-Regular",
        color: Colors.black2,
        fontSize: 14,
        textAlign: "center",
        marginVertical: width* 0.025,
    },
    orLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:15
    },
    dottedLine: {
        flex: 1,
        height: 1,
        borderStyle: "dotted",
        borderWidth: 1,
        borderColor: Colors.primaryColor,
    },
    orLoginText: {
        color: Colors.black2,
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal:8
    },
    footer: {
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primaryColor,
    },
    footerText: {
        color: Colors.white2,
        fontSize: 14,
        fontFamily: "Raleway-Regular",
    },
    bottom: {
        margin: 15,
    }
})

export default style;