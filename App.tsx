/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      setRandomBackground(color);  
      console.log(color);
    }
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
    <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Click me</Text>
      </View>
    </TouchableOpacity>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default App;
