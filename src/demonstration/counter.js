import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const counter = () => {
    const [ count, setCount ] = useState (0) 
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{`count: ${count}`}</Text>
            <Button color={'red'} title={'Increase the count'} onPress={() => setCount(count + 1) } />
            <Button color={'red'} title={'Decrease the count'} onPress={() => setCount(count - 1)} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },

    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default counter