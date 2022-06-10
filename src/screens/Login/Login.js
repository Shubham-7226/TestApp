import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import ButtonWithLoader from '../../components/ButtonWithLoader';
import CustomTextInput from '../../components/CustomTextInput';

export default function Login(navigation) {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const onLogin = () => {
    if (email == '' || password == '') {
      alert('Please enter email and password');
      return;
    }
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Email"
        placeholder="Email"
        onChangeText={email => updateState({email})}
      />
      <CustomTextInput
        label="Password"
        placeholder="Password"
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />
      <ButtonWithLoader title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    // borderWidth: 1,
  },
});
