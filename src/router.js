/* endPoint: https://fakestoreapi.com/ */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from './pages/Login';
import Loading from './components/Loading';

//icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer >
      {isAuthLoading ?
        (
          <Loading />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name='ProductPage'
              component={Products}
              options={{
                title: 'Dükkan',
                headerStyle: { backgroundColor: '#64b5f6' },
                headerTitleStyle: { color: 'white' },
                headerRight: () => (
                  <Icon
                    name='logout'
                    size={25} color='white'
                    onPress={() => dispatch({ type: 'REMOVE_USER' })}
                  />
                )
              }}
            />
            <Stack.Screen
              name='DetailPage'
              component={Detail}
              options={{
                title: 'Detay',
                headerStyle: { backgroundColor: '#64b5f6' },
                headerTitleStyle: { color: 'white' },
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
};



export default Router;
