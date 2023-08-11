import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ComTwo = ({ name }) => {
    const [isStart, setIsStart] = useState(true);
    const val = 'take more deep';
    const getFullName = (
        name, shyam, coll
    ) => {
        return `hi my name is ${name} and my friend name is ${shyam} let coll ${coll}`
    }
    return (
        <View>
            <Text>Hello,{getFullName(name, 'deepak', 'jai bol')},{val}</Text>
            <Button
                onPress={() => { setIsStart(!isStart) }}
                // disabled={!isStart}
                title={isStart ? 'started' : 'click to start'}
            />
        </View>
    )
}

export default ComTwo;