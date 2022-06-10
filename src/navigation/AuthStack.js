import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/Signup/Signup';
import Login from '../screens/Login/Login';


export default function AuthStack(Stack) {
  //   const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <stack.Screen name="usersComponent" component={usersComponent} /> */}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </>
  );
}
