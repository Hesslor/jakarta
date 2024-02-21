import {Dimensions, StyleSheet} from "react-native"
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    cartImage: {
        width: width* 0.08,
        height: height* 0.035,
        marginRight: width* 0.05,
        resizeMode: "contain",
    },
    countView: {
        position: "absolute",
        top: -10,
        right: width* 0.09,
        backgroundColor: "red",
        borderRadius: 10,
        zIndex: 5,
    },
    count: {
        color: Colors.white,
        fontFamily: "Raleway-Bold",
        fontSize: 11,
        paddingHorizontal: width* 0.014,
    },
})

export default style