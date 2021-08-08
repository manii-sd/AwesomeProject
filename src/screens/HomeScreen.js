import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>;
      <Button
        title="Go to the Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to the List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to the Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to the Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to the Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to the Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to the Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to the Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
