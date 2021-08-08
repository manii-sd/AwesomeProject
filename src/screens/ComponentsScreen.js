import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const Name = 'Manii';
  return (
    <View>
      <Text style={styles.textStyle}>Gretting started with React Native</Text>;
      <Text style={styles.subHeaderStyle}> My name is {Name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
