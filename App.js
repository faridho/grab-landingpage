import React from 'react'
import Navbar from "./components/Navbar"
import Wallet from "./components/Wallet"
import Menus from "./components/Menus"
import Content from "./components/Content"

import { View, StyleSheet } from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Wallet />
      <Menus />
      <Content />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ced6e0'
  }
})

