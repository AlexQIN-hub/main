import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {

    const [movies,setMovies] = useState({
        title : "Equeals 3",
        rating : 3,
 });

 const handleClick =() => {
    setMovies({...movies,rating : 5});
 };

  return (
    <View>
      <Text>UpdateObject</Text>
      <Text>Title : {movies.title}</Text>
      <Text>Rating : {movies.rating}</Text>

      <Button title='Change Rating' onPress={handleClick}/>
    </View>
  );
};

export default UpdateObject;