import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RestaurantScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Restaurant Page</Text>
      <Button title="Go to Home Page" onPress={ () => navigation.navigate("Home") } />
      <Button title="Go to Hospital Page" onPress={ () => navigation.navigate("Hospital") } />
      <Button title="Go to Like Page" onPress={ () => navigation.navigate("Like") } />
    </View>
  )
}

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
