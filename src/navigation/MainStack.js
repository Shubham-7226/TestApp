import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile/Profile';

import Home from '../screens/Home/Home';

export default function MainStack(Stack) {
  //   const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
    </>
  );
}
