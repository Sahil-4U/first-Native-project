import { View, Text } from 'react-native'
import React from 'react'

const ComTwo = ({ name }) => {
    const val = 'take more deep';
    const getFullName = (
        name, shyam, coll
    ) => {
        return `hi my name is ${name} and my friend name is ${shyam} let coll ${coll}`
    }
    return (
        <View>
            <Text>Hello,{getFullName(name, 'deepak', 'jai bol')},{val}</Text>
        </View>
    )
}

export default ComTwo;