import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default UploadScreen = () => {
  return (
    <View style={styles.container}>
      <Text>welcome upliad screen!</Text>
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
