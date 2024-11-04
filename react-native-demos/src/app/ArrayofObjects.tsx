import { FlatList, View,Text } from "react-native";

const arrayOfObject = () => {

    const locations = [
        {
            id : 1,
            name : "London",
        },

        {
            id : 2,
            name : "Paris",
        },

        {
            id : 3,
            name : "China",
        },

        {
            id : 4,
            name : "America",
        },

        {
            id : 5,
            name  : "Japan",
        },
    ];

    return(
        <View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={locations}
                renderItem={({item}) => <Text>{item.name}</Text>}
             />
        </View>
    );


}

export default arrayOfObject;