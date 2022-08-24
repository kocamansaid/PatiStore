import React from "react";
import { View, Text, StyleSheet, Searchbar, TextInput, searchQuery, FlatList } from "react-native";
import product_data from '../product.data.json';
import ProductCard from "./components/ProductCard";


const numColumns=2;

function App() {
    return (


        <View style={styles.container}>
            <View >
                <Text style={styles.head_text}>PATIKASTORE</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="  Ara..."
                />
            </View>
            <FlatList
            data={product_data}
            renderItem={({item})=> <ProductCard product={item}></ProductCard>} 
            numColumns={numColumns}
            >

            </FlatList>
        </View>




    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    head_text: {
        color: '#7f057f',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 25
    },
    textInput: {
        margin: 5,
        backgroundColor: '#ebeff2',
        borderRadius: 15
    }
})

export default App;