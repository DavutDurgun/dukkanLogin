//store
import AsyncStorage from '@react-native-async-storage/async-storage';
/*    
    AsyncStorage.setItem('@user','asdasd');//ekle
    AsyncStorage.getItem('@user');//getir
    AsyncStorage.removeItem('@user');//sil 
*/

const reducer = (state, actions) => {
    switch (actions.type) {
        case 'SET_USER': {
            const { user } = actions.payload;
            AsyncStorage.setItem('@USER', JSON.stringify(user))
            return { ...state, user };
        }

        case 'REMOVE_USER': {
            AsyncStorage.removeItem('@USER');
            return { ...state, user: null };
        }

        default: { return state; }
    }
}

export default reducer;