import React from 'react';
import Greet from '../components/Greet';
import {View,Text,StyleSheet} from 'react-native';
import ComponetsA from '../components/ComponentsA';
import { Link } from 'expo-router';
import arrayOfObject from './ArrayofObjects';
import listData from '../app/FlatListT';
import ShowUp from './ShowUp';
import HugeComponents from '../components/HugeComponents';
import ProductList from '../components/ProductList';
import WithoutState from '../components/Basic counter/WithoutState';
import UpdateArray from '../components/Basic counter/UpdateArray';
import UpdateObject from '../components/Basic counter/UpdateObject';
import ShairingState from '../components/Shairing State/ShairingState';
import ToggleButton from '../components/ToggleButton/ToggleButton';
import WeatherApp from '../components/WeatherApp';
import ColorPicker from '../components/ColorPicker';
import TodoList from '../components/TodoList1';
console.log('ShairingState:', ShairingState);


const index = () => {
  return (
    <View>
        <Greet />
        <TodoList />
        
        
        
        
       

        
    </View>
  )
};

const styles=StyleSheet.create({
  linktext : {
    color : 'blue',
    fontSize : 20,
    
  }
})

export default index;