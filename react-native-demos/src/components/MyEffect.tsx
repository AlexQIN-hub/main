import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';



const MyEffect = () => {

  const [value,setValue] = useState(0);
  const [sth,setSth] = useState(0);

    useEffect(() => {
        console.warn("useEffect called");
    },[value]);      //incording to add the "[]" ,the useEffect only get called once


  return (
    <View>
      <Text>{value}</Text>
      <Text>{sth}</Text>
      <Button title="Increment_value" onPress={() => setValue(value + 1)} />
      <Button title="Increment_sth" onPress={() => setSth(sth + 1)} />
    </View>
  );
};

export default MyEffect;