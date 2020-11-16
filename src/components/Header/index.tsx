import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import logo from '../../assets/logo.png';
import camera from '../../assets/camera.png';
import direct from '../../assets/direct.png';


export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={camera}/>
      <Image source={logo}/>
      <Image source={direct}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingTop: 9,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#b3b3b3',
    backgroundColor: "#fafafa",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
})