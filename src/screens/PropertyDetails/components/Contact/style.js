import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        backgroundColor: Colors.white2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: width* 0.04,
        
    },
    profileView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    profileView2: {
        backgroundColor: Colors.steel,
        borderRadius: 30,
        overflow: "hidden"
    },
    profile: {
        width: width* 0.14,
        height: height* 0.06,
        resizeMode: "contain"
    },
    textView: {
        marginLeft: width* 0.04,
    },
    name: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 20, 
    },
    owner: {
        color: Colors.shadow,
        fontFamily: "Raleway-Regular",
        fontSize: 13,
    },
    iconView: {
        flexDirection: "row",
        gap: width* 0.04,
    },
    iconView2: {
        backgroundColor: "#A0DAFB",
        borderRadius: width* 0.02,
        padding: width* 0.02,
    },
    icon: {
        width: width* 0.05,
        height: height* 0.025,
        resizeMode: "contain"
    }

})

export default style;