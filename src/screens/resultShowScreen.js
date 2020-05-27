import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import yelp from '../api/yelp'

const ResultScreenShow = ({ navigation }) => {

    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }


    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text>hi</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultScreenShow;
