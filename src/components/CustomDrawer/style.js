import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen")

const style = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.primaryColor,
    },
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        paddingVertical: width* 0.2,
        gap: width* 0.06,
        backgroundColor: Colors.primaryColor,
        overflow: "hidden"
    },
    contents: {
        paddingVertical: width* 0.05,
        gap: width* 0.08,
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.04,
        paddingLeft: width* 0.04,
        paddingRight: width* 0.1,
    },
    selectedContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.04,
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        padding: width* 0.02,
        paddingLeft: width* 0.04,
    },
    icon: {
        width: width* 0.06,
        height: height* 0.025,
        resizeMode: "contain",
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: Colors.white,
    },
    selectedText: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        color: Colors.primaryColor,
    },
    line: {
        borderWidth: 0.8,
        borderColor: Colors.inputBg,
    }
})

export default style;