import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BmiCalculator = (props) => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBMI] = useState(0)


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       BMI Calculaor
    </Text>
    <View style ={{flexDirection: 'row'}}>
      <Text> Weight </Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setWeight(parseFloat(text))}}
        />
    </View>
    <View style ={{flexDirection: 'row'}}>
      <Text> Height </Text>
      <TextInput
            style={styles.textinput}
            onChangeText={text => {setHeight(parseFloat(text))}}
        />
    </View>
    <Button
          color='red' title='Calculate BMI'
          onPress = {() =>
               setBMI(703*weight/(height*height))          }
      />
    <Text> Height = {height}</Text>
    <Text> Weight = {weight}</Text>
    <Text> Your BMI is {bmi} </Text>
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default BmiCalculator;
