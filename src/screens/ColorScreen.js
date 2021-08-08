import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: rgbRandom(),
              }}></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.fِloor(Math.random() * 256);
  const green = Math.fِloor(Math.random() * 256);
  const blue = Math.fِloor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({});

export default ColorScreen;
