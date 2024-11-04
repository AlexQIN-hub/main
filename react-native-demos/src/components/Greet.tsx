import { View,Text } from "react-native";
import st from "../utils/Style";
import { StyleSheet } from "react-native";


const Greet = () => {
    return (
        <View style={st.shadowStyle}>
            <Text style={{fontSize : 20, color : 'black'}}>Hello Mick Mr. React Native R</Text>
        </View>
    )
};

const styels = StyleSheet.create({
    textStyleSheet : {
        color : 'black',
        fontSize : 15,
    }
});

export default Greet;