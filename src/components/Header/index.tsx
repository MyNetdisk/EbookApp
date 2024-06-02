import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface props {
    title: string;
}

const Header = (props: props): JSX.Element => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Header