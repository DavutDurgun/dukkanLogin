//API_URL=https://fakestoreapi.com/products
import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";
//components
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

//style
import styles from './Products.style'

//services
import useFetch from '../../hooks/useFetch/useFetch';


const Products = ({ navigation }) => {
    const { error, isLoading, data } = useFetch('https://fakestoreapi.com/products');
    const user = useSelector(s => s.user);
    const onSelected = (item) => {
        navigation.navigate('DetailPage', { item, })
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelected={() => { onSelected(item) }} />;
    const keyExtractor = item => `${item.id}`;

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ?
                <Loading />
                :
                <View>
                    <Text>Hello {user.name.firstname}</Text>
                    <FlatList
                        data={data}
                        renderItem={renderProduct}
                        keyExtractor={keyExtractor}
                    />
                </View>
            }


            {error &&
                <Error />
            }
        </SafeAreaView>
    );
}

export default Products;