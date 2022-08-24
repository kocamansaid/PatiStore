import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',



    },
    imageContainer: {
        
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        borderColor: '#E1E1E1',
        borderRadius: 6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'

    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        color: 'gray',
        padding: 10,
    },
    inner_container: {

        padding: 15,
    }
});