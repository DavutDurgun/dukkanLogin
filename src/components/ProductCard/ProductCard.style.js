import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex:1,
    },
    inner_container: {
        flex:1, 
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row'
    },
    image: {
        width: 80,
        minHeight:80,
        resizeMode:'contain',
        backgroundColor:'#fff'
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 17,
        fontWeight: '700'
    },
    price: {
        textAlign: 'right',
        fontSize: 15,
        fontStyle: 'italic',
    },
});