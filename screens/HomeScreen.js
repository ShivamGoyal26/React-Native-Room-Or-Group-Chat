import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Title, List, Divider } from 'react-native-paper';
import FormButton from '../components/FormButton';
import { AuthContext } from '../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';


export default function HomeScreen({ navigation }) {

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider style={{backgroundColor: 'black'}} />}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description='Item description'
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
    color: 'black'
  },
  listDescription: {
    fontSize: 16,
    color: 'black'
  },
});