import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookShelf = ({ navigation, route }: any): JSX.Element => {
    useEffect(() => {
        // 执行一些操作
        navigation.setOptions({
            headerTitle: '书架',
            headerRight: () => (
                <TouchableOpacity onPress={() => { }}>
                    <Text>
                        <Icon name="plus" size={30} color="#900" />
                    </Text>
                </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
        })
    }, [])
    return (
        <View style={styles.container}>
            <Text>BookShelf</Text>
            <Text>
                <Icon name="rocket" size={30} color="#900" />;
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default BookShelf;