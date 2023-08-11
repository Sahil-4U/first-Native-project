import { View, Text } from 'react-native'
import React from 'react'

const ComTwo = () => {
    const getFullName = (
        name, shyam, coll
    ) => {
        return `hi my name is ${name} and my friend name is ${shyam} let coll ${coll}`
    }
    return (
        <View>
            <Text>Hello,{getFullName('sahil', 'deepak', 'jai bol')}</Text>
        </View>
    )
}

export default ComTwo