import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Orders from './Orders';
import Header from './Header';
import OrderDetails from './OrderDetails';

const Stack = createStackNavigator();

function Routes() {
    return (
        <>
            <Header />
            <NavigationContainer>
                <Stack.Navigator headerMode="none" screenOptions={{
                    cardStyle: {
                        backgroundColor: '#ffff'
                    }
                }} >
                    <Stack.Screen name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                    <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        </>

    )
}
export default Routes;