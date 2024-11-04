// import { View, Text, Button } from 'react-native';
// import React from 'react';

// interface ComponentTypeProps {
//     count : number;
//     onClickHandler : () => void;
// };

// const ComponentOne = ({count,onClickHandler} : ComponentTypeProps) => {
//   return (
//     <View>
//       <Text>ComponentOne</Text>
//       <Text>Count : {count}</Text>
//       <Button title="Press Me1" onPress={onClickHandler} />
//     </View>
//   );
// };

// export default ComponentOne;

import { Button, Text, View } from "react-native";

interface ComponentOneProps {
  count: number;
  onClickHandler: () => void;
}

const ComponentOne = ({ count, onClickHandler }: ComponentOneProps) => {
  return (
    <View>
      <Text>Component One</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentOne;
