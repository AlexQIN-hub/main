import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ComponentTwo from './ComponentTwo';
import ComponentOne from './ComponentOne';



const ShairingState = () => {
    const [count,setCount] = useState(0);
    
  return (
    <View>
      <Text>Shairing State</Text>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)}/>
    </View>
  );
};

export default ShairingState;