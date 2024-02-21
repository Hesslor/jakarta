import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        padding: width*0.03,
        borderRadius: width* 0.03,
    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        color: Colors.black,
        fontSize: 18,
        fontFamily: "Railway-Bold",
        fontWeight: "600",
    },
    headerContent: {
        fontFamily: "Railway-Regular",
        color: Colors.black,
        fontSize: 14,
    },
    seeAll: {
        fontFamily: "Railway-Regular",
        color: Colors.shadow,
        fontSize: 14,
    },
})

export default style;