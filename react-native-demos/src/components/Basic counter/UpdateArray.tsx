import { View, Text, FlatList,Button } from 'react-native'
import React, { useState } from 'react'



const UpdateArray = () => {

    const [friends,setFriends] = useState(["Alex","Molly","Jaca"]);

    const addOne = () => setFriends([...friends,"HuXn"]);

    const removeOne = () => setFriends(friends.filter((f) => f !== "Jaca"));

    const update = () => 
        setFriends(friends.map((f) => (f == "Alex" ? "Alex Smith" : f)));

  return (
    <View>
      <Text>UpdateArray</Text>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({item}) => <Text>{item}</Text>}
       />
      <Button title="Add One" onPress={addOne} />
      <Button title="Remove One" onPress={removeOne} />
      <Button title="Update One" onPress={update} />
    </View>
  );
};

export default UpdateArray;