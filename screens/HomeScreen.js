import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import FormButton from '../components/FormButton';
import {AuthContext} from '../Navigation/AuthProvider';


export default function HomeScreen() {

  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Title style={{color: 'black'}}>Home Screen</Title>
      <Title style={{color: 'black'}}>All chat rooms will be listed here</Title>
      <Title style={{color: 'black'}}>{user.uid}</Title>
      <FormButton
        modeValue='contained'
        title='Logout'
        onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});