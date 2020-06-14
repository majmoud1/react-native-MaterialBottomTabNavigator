import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HospitalScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hospital Page</Text>
      <Button title="Go to Home Page" onPress={ () => navigation.navigate("Home") } />
      <Button title="Go to Restaurant Page" onPress={ () => navigation.navigate("Restaurant") } />
      <Button title="Go to Like Page" onPress={ () => navigation.navigate("Like") } />
    </View>
  )
}

export default HospitalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
