import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Go to Hospital Page" onPress={ () => navigation.navigate("Hospital") } />
    </View>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
