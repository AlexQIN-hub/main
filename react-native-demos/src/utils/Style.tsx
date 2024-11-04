import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    textStyle : {
        color : 'white',
        fontSize : 30,
        backgroundColor : "teal",
        margin : 30,
        padding : 20,
    },

    shadowStyle : {
        padding : 20,
        width : '80%',
        borderRadius : 10,
        shadowColor : '#000',
        shadowOffset : {width : 0,height : 2},
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
    },
});

export default st;

