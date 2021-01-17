import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import OrderCard from '../OrderCard';

function Orders() {

    return (

        <ScrollView style={styles.container}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />

        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '5%',
        paddingRight: '5%',
    }
});

export default Orders;