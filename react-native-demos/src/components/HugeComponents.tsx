import { FlatList, View,Image,Text,StyleSheet } from 'react-native'
import React from 'react'
import index from '../app/Index';
import st from '../utils/Style';

interface Product {
    // image : string;
    image : number;

    name : string;

    rating : number;

    price : number;
};

const HugeComponents = () => {

    const products = [
        {
            image : require("../assets/image/car2.jpg"),

            name : "Product 1",

            rating : 4.5,

            price : 29.99,
        },

        {
            image : require("../assets/image/car3.jpg"),

            name : "Product 2",

            rating : 4.0,

            price : 28.99,
        },

        {
            image : require("../assets/image/car4.jpg"),

            name : "Product 3",

            rating : 3.5,

            price : 27.99,
        },

        {
            image : require("../assets/image/car5.jpg"),
            name : "Product 4",

            rating : 3.0,

            price : 26.99,
        },

        {
            image : require("../assets/image/car6.jpg"),

            name : "Product 5",

            rating : 2.5,

            price : 25.99,
        },
    ];

    const renderItem = ({item} : {item : Product}) => {
        return(
            <View style={styles.productContainer}>
                {/* <Image source={{ uri : item.image}} style={styels.image}/> */}
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>Rating : {item.rating}</Text>
                <Text style={styles.price}>Price : ${item.price}</Text>
            </View>
        )
    };

  return (
    <View>
        <FlatList
            data={products}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderItem}
         />
    </View>
  );

};

const styles = StyleSheet.create({
    productContainer : {
        flex : 1,
        alignItems : 'center',
        padding : 10,
        marginBottom : 10,
        backgroundColor : '#fff',
        borderRadius : 10,
        shadowColor : "#000",
        shadowOffset : {width : 0,height : 2},
        shadowOpacity : 0.1,
        shadowRadius : 5,
        elevation : 5,

    },

    image : {
        width : 200,
        height : 300,
        borderRadius : 10,
    },

    name : {
        fontSize : 18,
        fontWeight : "bold",
        marginTop : 10,
    },

    rating : {
        fontSize : 16,
        color : "#888",
        marginTop : 5,
    },

    price : {
        fontSize : 16,
        color : '#000',
        marginTop : 5,
    },
});

export default HugeComponents;