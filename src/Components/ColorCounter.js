import React, {useReducer} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};
const ColorCounter = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({type: 'increment', payload: 1});
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1});
        }}
      />
      <Text>Current Count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
