import { View, Text,Button } from 'react-native'
import React, { useState } from 'react'



const WithoutState = () => {

    const [count,setCounter]= useState(0);
    
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCounter(count + 1)} />
    </View>
  )
}

export default WithoutState