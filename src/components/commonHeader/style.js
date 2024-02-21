import { StyleSheet,Dimensions } from "react-native";
import Colors from "../Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        padding: width* 0.02,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
    },
    location: {
        color: Colors.shadow,
        margin: width* 0.015,
    },
    headerView: {
        flexDirection: "row",
    },
    headerText: {
        color: Colors.black,
        fontFamily: "Lato-Bold",
        fontSize: 22,
        marginLeft: width* 0.015,
    },
    down: {
        width: width* 0.05,
        height: height* 0.02,
        resizeMode: "contain",
        margin: width* 0.02,
    },
    icon: {
        width: width* 0.2,
        height: height* 0.038,
        resizeMode: "contain",
        alignSelf: "center",
    }
})

export default style;