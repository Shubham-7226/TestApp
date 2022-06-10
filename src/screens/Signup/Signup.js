import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../components/CustomTextInput';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import UsersComponent from '../../components/UsersComponent';

export default function Signup({navigation}) {
  const [state, setState] = useState({
    isLoading: false,
    username: '',
    email: '',
    password: '',
    isSecure: true,
  });
  const {username, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const onSignup = () => {
    if (username === '' || email === '' || password === '') {
      alert('Please enter all the details');
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <UsersComponent />
      <CustomTextInput
        label="Username"
        placeholder="Username"
        onChangeText={username => updateState({username})}
      />
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
      <ButtonWithLoader title="SIGNUP" onPress={onSignup} />
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
