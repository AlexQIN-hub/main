import { View, Text,Image, StyleSheet} from 'react-native'
import React from 'react'

interface ProductProps {
    name : string;
    price : number;
    isFeatured : boolean;
    image : string;
    description : string
};

const ProductsComponent = ({name,price,isFeatured,image,description} : ProductProps) => {
  return (
    <View style={styels.productContainer}>
        <View style={styels.imageContainer}>
            <Image source={{uri : image}} style={styels.productContainer}/>
        </View>
        <View style={styels.contentContainer}>
            <Text style={styels.productName}>Name : {name}</Text>
            <Text style={styels.productPrice}>Price : {price}</Text>
            {isFeatured && <Text style={styels.featuredTag}>Featured</Text>}
            <Text style={styels.productDescription}>${description}</Text>
        </View>
    </View>
  )
};

const styels = StyleSheet.create({
    productContainer : {
        flexDirection : "row",
        padding : 10,
        borderColor :"#ddd",
        borderWidth : 1,
        borderRadius : 8,

    },

    imageContainer : {
        width : 200,
        height : 300,
        borderRadius : 10,
    },

    contentContainer : {
        padding : 10,
        borderWidth : 2,
        borderRadius : 10,
    },

    productName : {
        fontSize : 18,
        fontWeight : "bold",
        marginTop : 10,
    },

    productPrice :{
        fontSize : 16,
        color : "#000",
        marginTop : 5,
    },

    featuredTag : {
        backgroundColor : "#f0f0f0",
        padding : 4,
        borderRadius : 4,
        marginBottom : 8,
    },

    productDescription : {
        fontSize : 14,
    },
});

export default ProductsComponent;