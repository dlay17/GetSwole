// This component gives the ideal weight you should lift for your weight

import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput  } from "react-native";
import deadlift from '../assets/deadlift.json'
import backsquat from '../assets/backsquat.json'

const TextBox = (props) => {
  return (
    <View style={styles.tableRow}>
      <Text>{props.text}</Text>
    </View>
  )
}

const MaxLift = (props) => {
  let lift
  switch(props.lift) {
    case 'deadlift':
      lift = deadlift
      break
    case 'backsquat':
      lift = backsquat
      break
    default:
      lift = "null"
  }

  return (
    <View style={styles.container}>
      <Text>{lift.lift}</Text>
      <View style={styles.rowContainer}>
        <TextBox text=' '/>
        <TextBox text='Novice'/>
        <TextBox text='Average'/>
        <TextBox text='Advance'/>
        <TextBox text='Elite'/>
      </View>
      <View style={styles.rowContainer}>
        <TextBox text='Men'/>
        <TextBox text={props.weight*lift.men.novice}/>
        <TextBox text={props.weight*lift.men.average}/>
        <TextBox text={props.weight*lift.men.advance}/>
        <TextBox text={props.weight*lift.men.elite}/>
      </View>
      <View style={styles.rowContainer}>
        <TextBox text='Women'/>
        <TextBox text={props.weight*lift.women.novice}/>
        <TextBox text={props.weight*lift.women.average}/>
        <TextBox text={props.weight*lift.women.advance}/>
        <TextBox text={props.weight*lift.women.elite}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    backgroundColor: '#f9c2ff',
    marginVertical: 4,
    marginHorizontal: 8,
    width: 100,
    height: 50
  },
  header: {
    fontSize:40,
    color:'blue'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput:{
    margin:20,
    fontSize:20
  },
});

export default MaxLift;
