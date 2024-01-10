import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

// const Drawer = createDrawerNavigator();

const App = (navigation) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Icon name = "menu-unfold" size = {24}/>
      </TouchableOpacity>  
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Drawer: {
    position: 'absolute',
    height: '100%',
    width: 300,
    backgroundColor: 'red'
  }
})