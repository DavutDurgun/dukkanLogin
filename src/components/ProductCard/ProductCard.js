import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({ product, onSelected }) => {

    return (
        <TouchableHighlight style={styles.container} onPress={onSelected}>
            <View style={styles.inner_container}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                </View>

            </View>
        </TouchableHighlight>
    );
}

export default ProductCard;