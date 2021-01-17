import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
            <Text style={styles.text}>DS Deliver</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#da5d5d',
        height: 90,
        paddingTop: 50,
        flexDirection: "row",
        justifyContent: "center",

    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold',
    }

});

export default Header;