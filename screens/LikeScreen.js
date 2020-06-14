import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LikeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Like Page</Text>
      <Button title="Go to Home Page" onPress={ () => navigation.navigate("Home") } />
      <Button title="Go to Hospital Page" onPress={ () => navigation.navigate("Hospital") } />
      <Button title="Go to Restaurant Page" onPress={ () => navigation.navigate("Restaurant") } />
    </View>
  )
}

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
