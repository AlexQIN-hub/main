import { Link } from "expo-router";
import { FlatList, View,Text } from "react-native";

const listData = () => {

    const fruits = ["apple","banana","orange"];

    return(
        <View>
            <FlatList 
            data={fruits} 
            keyExtractor={(item) => item}
            renderItem={({item}) => {
                return <Text>{item}</Text>;
            }} />

            <Link href="/Index">Index</Link>
        </View>
    )
}

export default listData;