import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RoomScreen() {

    function scrollToBottomComponent() {
        return (
          <View style={styles.bottomComponentContainer}>
            <AntDesign name='downcircleo' size={20} color='#6646ee' />
          </View>
        );
      }

    function renderSend(props) {
        return (
          <Send {...props}>
            <View style={styles.sendingContainer}>
              <Ionicons name='send' size={28} color='#6646ee' />
            </View>
          </Send>
        );
      }

    function renderBubble(props) {
        return (
          // Step 3: return the component
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                // Here is the color change
                backgroundColor: '#6646ee'
              }
            }}
            textStyle={{
              right: {
                color: '#fff'
              }
            }}
          />
        );
      }

  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
   
    },
    {
        _id: 2,
        text: 'New room created.',
        createdAt: new Date().getTime(),
        user:{
            _id: 1,
            name: 'Shivam'
        }
      },
    // example of chat message
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      },
      
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      placeholder = "Type a message..."
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}

const styles = StyleSheet.create({
    sendingContainer: {
      marginRight: 10,
      marginBottom: 8,
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
  });