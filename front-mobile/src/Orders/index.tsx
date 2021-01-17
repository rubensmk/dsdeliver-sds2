import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import OrderCard from '../OrderCard';
import { Order } from '../type';


function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(error => Alert.alert('Houve um erro ao buscar pelos pedidos'))
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused])


    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }
    return (

        <ScrollView style={styles.container}>
            {isLoading ? (
                <Text style={styles.loadingText}>Carregando...</Text>
            ) : (
                    orders.map(order => (
                        <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                            <OrderCard order={order} />
                        </TouchableWithoutFeedback>
                    ))
                )}
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    loadingText: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 200,
    }
});

export default Orders;