import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
// import { IconButton } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();

function ChatApp() {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <ChatAppStack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Entypo
            style={{marginRight: 5,}}
              name='circle-with-plus'
              size={28}
              color='#ffffff'
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />
    </ChatAppStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <ModalStack.Navigator mode='modal' headerMode='none'>
      <ModalStack.Screen name='ChatApp' component={ChatApp} />
      <ModalStack.Screen name='AddRoom' component={AddRoomScreen} />
    </ModalStack.Navigator>
  );
}