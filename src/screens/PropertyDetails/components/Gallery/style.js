import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        backgroundColor: Colors.white2,
        padding: width* 0.02,
    },
    header: {
        color: Colors.black,
        fontFamily: "Raleway-Bold",
        fontSize: 20,
        marginLeft: width* 0.04,
        marginTop: width* 0.03,
    },
    imageView: {
        padding: width* 0.02,   
    },
    image: {
        width: width* 0.2,
        height: height* 0.08,
        borderRadius: width* 0.02,
        overflow: "hidden",
    },

})

export default style;