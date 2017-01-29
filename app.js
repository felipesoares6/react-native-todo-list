import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Header from './header';
import Footer from './footer';

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>

        </View>
        <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...Platform.select({
      android: { paddingTop: 30 }
    })
  },

  content: {
    flex: 1
  }
})

export default App;
