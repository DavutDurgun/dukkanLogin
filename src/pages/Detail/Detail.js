import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, } from 'react-native';

import styles from './Detail.style';

const Detail = ({ route }) => {
    const [data, setData] = useState(route.params.item);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Detail;