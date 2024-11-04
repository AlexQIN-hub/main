import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const ToggleButton = () => {
    const [isOne,setIsOn] = useState(false);

  return (
    <View>
      <Text>ToggleButton</Text>
      <Text>{isOne ? "ON" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOne)} />
    </View>
  );
};

export default ToggleButton;