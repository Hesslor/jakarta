import React, { useEffect, useState } from 'react';
import {Dimensions, StyleSheet} from "react-native"
import Colors from "../Colors";

const {height, width} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerFilter: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    searchContainer: {
        backgroundColor: Colors.white2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width* 0.03,
        borderRadius: 15,
        margin: width* 0.03,
    },
    searchIcon: {
        width: width* 0.06,
        height: height* 0.028,
    },
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        color: Colors.black,
        marginLeft: 10,
    },
    filterView: {
        padding: width* 0.03,
        backgroundColor: Colors.primaryColor,
        borderRadius: 10,
        marginRight: width* 0.03,
    },
    filterIcon: {
        width: width* 0.037,
        height: height* 0.022,
        
        padding: width* 0.0,
    },
    FilterText: {
        color: Colors.primaryColor,
        margin: 15,
    },
})

export default style