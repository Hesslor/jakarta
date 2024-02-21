import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width,height} = Dimensions.get("screen")

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: width* 0.05,
    },
    backgroundImage: {
        width: width* 0.6,
        height: height* 0.33,
        resizeMode: "contain",
        overflow: "hidden",
        borderRadius: width* 0.05,
        marginVertical: width* 0.02,
        marginHorizontal: width* 0.04,
        

        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.19,  
        elevation: 13,
    },
    LbackgroundImage: {
        width: width* 1.8,
        height: height* 0.24,
        resizeMode: "contain",
        overflow: "hidden",
        borderRadius: width* 0.05,
        marginVertical: width* 0.02,
        marginHorizontal: width* 0.04,
    },
    gradientContainer: {
        flex: 1,
        justifyContent: "flex-end",
      },
    textContainer: {
        margin: width* 0.06,
    },
    head: {
        fontSize: 20,
        color: Colors.white,
    },
    description: {
        fontSize: 15,
        color: Colors.white,
    }
})

export default style;