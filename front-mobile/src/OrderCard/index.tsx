import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function OrderCard() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.orderName}> Pedido 1 </Text>
                <Text style={styles.orderPrice}> R$ 111 </Text>
            </View>
            <Text style={styles.text}>Há 30 min</Text>
            <View style={styles.productsList}>
                <Text style={styles.text}>Pizza Calabresa</Text>
                <Text style={styles.text}>Pizza Calabresa</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '2%',
        padding: 15,
        backgroundColor: '#FFF',
        shadowOpacity: 0.25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
        borderRadius: 10,
        elevation: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular'
    },
    orderName: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#263238',
        fontFamily: 'OpenSans_700Bold'
    },
    orderPrice: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'right',
        letterSpacing: -0.24,
        color: '#DA5C5C',
        fontFamily: 'OpenSans_700Bold'
    },
    productsList: {
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
        marginTop: 20,
        paddingTop: 15
    }
});

export default OrderCard;