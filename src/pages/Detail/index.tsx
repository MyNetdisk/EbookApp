import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../components/Header/index';

const BookDetail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header title='书架' />
            <Text>BookDetail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default BookDetail;