import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function UsersComponent({navigation}) {
  const users = useSelector(state => state.users.users);
  // const userObject = JSON.parse(users);

  console.log('in user comp' + users);
  // const error = useSelector(state => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('before dispatch');
    dispatch({type: 'GET_USERS_REQUESTED', users: users});
    console.log('after dispatch');
    // console.log('in useEffect ' + users);
  }, [navigation]);

  const renderItems = ({item}) => (
    <View style={{height: 25, width: 300, backgroundColor: 'transparent'}}>
      <Text style={{color: 'black', fontSize: 16}}>{item.name}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {console.log('in flatlist', typeof users)}
      <FlatList
        data={users}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
