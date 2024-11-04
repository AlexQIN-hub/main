import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const weatherData = {
    London : "20°C, Clear",
    Paris : "22°C, Sunny",
    NewYork : "18°C, Cloudy",
}

const WeatherApp = () => {
    const [city,setcity] = useState('');
    const [weather,setWeather] = useState('');

     const getWeather = () => {
        setWeather(weatherData[city] || "Not data avaliable");

    }

  return (
    <View>
      <Text>WeatherApp</Text>
      <TextInput placeholder="Enter City" value={city} onChangeText={setcity} />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  )
}

export default WeatherApp