/*
 * File: app.js
 * Authors: Juhász Zsolt
 * Copyright: 2022, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2022-01-22
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */

import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function App() {

  const [sideLength, setPentagonSide] = useState(0);
  const [pentagonArea, setPentagonArea] = useState(0);

  function calcPentagonArea(){
    let result = (5*Math.pow(sideLength, 2)*Math.tan(54*Math.PI/180))/4;
    setPentagonArea(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pentagon</Text>
      <Text style={styles.header}>Ez a program kiszámolja a pentagon területét a feladatban megadott képlet alapján</Text>
      <Text style={styles.header}>Készítő: Juhász Zsolt </Text>
      <Text style={styles.header}>2022.01.22</Text>
      <View style={styles.layout}>
        <Text style={styles.inputValue}>Oldalhossz:</Text>
        <TextInput placeholder="Adja meg az oldal hosszát" style={styles.input} onChangeText={ pentagonSide => setPentagonSide(pentagonSide) } />
        <Button title="Számol" style={styles.runButton}  onPress={calcPentagonArea}/>
      </View>
      <Text style={styles.area}>Pentagon területe: {pentagonArea}</Text>
      <Image source={{
        width: 265,
        height: 250,
        uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Pentagon.svg",
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbccff',
    alignItems: 'center',
  },
  header:{
    fontSize: 26,
    paddingBottom: 10,
    marginBottom: 10,
    color: '#03c6fc'
  },
  layout: {
    alignItems: 'center',
    backgroundColor: '#53fc7e',
    paddingHorizontal: 250,
    paddingBottom: 20,
    marginBottom: 10,
    width: '50%',
  },
  input: {
    borderWidth: 4,
    borderColor: 'black',
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    paddingStart: 10,
  },
  title: {
    fontFamily: "Impact",
    color: "#3b5998",
    margin: 40,
    fontSize: 100,
    fontWeight: "bold"
  },
  inputValue: {
    fontWeight: 'bold',
    color: '#03a9fc',
    marginTop: 20,
    fontSize: 30
  },
  area: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 40,
    color: '#c653fc'
  },
  runButton: {
    color: '#53fcee',
    alignItems:'center'
  }

});