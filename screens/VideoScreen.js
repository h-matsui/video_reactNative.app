import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>welcome to Video screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
