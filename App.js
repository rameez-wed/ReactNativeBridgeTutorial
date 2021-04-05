/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TouchableOpacity style={styles.buttonText}>
          <Text>Select Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  tinyLogo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  buttonText: {
    alignSelf: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 24,
    padding: 8,
  },
});

export default App;
