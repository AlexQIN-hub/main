import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ProductsComponent from './ProductsComponent';


const products = [
    {
        name: "Ultra Laptop",
        price: 1299,
        isFeatured: true,
        image: require("../assets/image/car2.jpg"),
        description: "A high-performance laptop suitable for all your professional needs."
      },
      {
        name: "Wireless Earbuds",
        price: 149,
        isFeatured: false,
        image: require("../assets/image/car3.jpg"),
        description: "Compact and powerful earbuds with excellent sound quality and noise cancellation."
      },
      {
        name: "4K Action Camera",
        price: 299,
        isFeatured: true,
        image: require("../assets/image/car4.jpg"),
        description: "Capture stunning videos and photos in 4K resolution, even in the most extreme conditions."
      },
      {
        name: "Smart Home Speaker",
        price: 79,
        isFeatured: false,
        image: require("../assets/image/car5.jpg"),
        description: "A smart speaker that connects to your home network and offers high-quality sound and voice control."
      },
      {
        name: "Fitness Smartwatch",
        price: 199,
        isFeatured: true,
        image: require("../assets/image/car6.jpg"),
        description: "Track your health and fitness with this stylish and feature-rich smartwatch."
      },
];

const ProductList = () => {
  return (
    <FlatList
        data={products}
        renderItem={({item}) => (
            <ProductsComponent
                name={item.name}
                price={item.price}
                isFeatured={item.isFeatured}
                image={item.image}
                description={item.description}
             />
        )}
        keyExtractor={(item,index) => index.toString()}


    
     />
            

        

    );
};

export default ProductList;