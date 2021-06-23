// This component gives the ideal weight you should lift for your weight

import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput  } from "react-native";
import deadlift from '../assets/deadlift.json'
import backsquat from '../assets/backsquat.json'

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
  const [weight, setWeight] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{lift.lift}</Text>
      <View style={styles.rowContainer}>
        <Text>Enter weight</Text>
        <TextInput
              style={styles.textinput}
              onChangeText={weight => {setWeight(parseFloat(weight))}}
        />
      </View>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Novice</th>
            <th scope="col">Average</th>
            <th scope="col">Advance</th>
            <th scope="col">Elite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Men</th>
            <td>{Math.round(weight*lift.men.novice)}</td>
            <td>{Math.round(weight*lift.men.average)}</td>
            <td>{Math.round(weight*lift.men.advance)}</td>
            <td>{Math.round(weight*lift.men.elite)}</td>
          </tr>
          <tr>
            <th scope="row">Women</th>
            <td>{Math.round(weight*lift.women.novice)}</td>
            <td>{Math.round(weight*lift.women.average)}</td>
            <td>{Math.round(weight*lift.women.advance)}</td>
            <td>{Math.round(weight*lift.women.elite)}</td>
          </tr>
        </tbody>
      </table>
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
