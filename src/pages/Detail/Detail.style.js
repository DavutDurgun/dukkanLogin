import { StyleSheet, Dimensions } from 'react-native';
const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
    },
    inner_container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 5,
    },
    price: {
        textAlign: 'right',
        fontSize: 18,
        fontWeight: '700',
    }

});