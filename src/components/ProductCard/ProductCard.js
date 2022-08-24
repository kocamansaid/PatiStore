import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import styles from './ProductCardStyle.js'


const ProductCard = ({ product }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.imgURL }}>
                </Image>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {!product.inStock && (
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>STOKTA YOK</Text>
                )}
            </View>

        </View>
    )

}

export default ProductCard;