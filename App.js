import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, SafeAreaView  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LearnTo from './components/LearnTo'
import MaxLift from './components/MaxLift'
import BMIcalc from './components/BmiCalculator'
import Camera from './components/Camera'
import CustomWO from './components/CustomWorkout'

const Stack = createStackNavigator();

const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
    )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IntroScreen}/>
        <Stack.Screen name="Camera" component={Camera}/>
        <Stack.Screen name="Squat" component= {Squats}/>
        <Stack.Screen name="Deadlift" component={Deadlift}/>
        <Stack.Screen name="MaxLift" component={MaximumLift}/>
        <Stack.Screen name="MaxDeadlift" component={MaxDeadlift}/>
        <Stack.Screen name="MaxBackSquat" component={MaxBackSquat}/>
        <Stack.Screen name="CustomWO" component={CustomWO}/>
        <Stack.Screen name="BMI" component={BMI}/>
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text='Get Swole. The App.'/>
      <Text>This is a fitness app that looks at your form in real time and guides you on the perfect squat!</Text>
      <Button title="Capture your form"
        onPress={() =>
          navigation.navigate('Camera', { name: 'Capture your form' })
        }/>
      <Button title="Learn to BackSquat"
        onPress={() =>
          navigation.navigate('Squat', { name: 'Learn to Squat' })
        }/>
      <Button title="Learn to Deadlift"
        onPress={() =>
          navigation.navigate('Deadlift', {name: 'Learn to Deadlift'})
        }/>
      <Button title="Ideal Lifting Weight"
        onPress={() =>
          navigation.navigate('MaxLift', {name: 'Maximum Lifting'})
        }/>
      <Button title="BMI Calculator"
        onPress={() =>
          navigation.navigate('BMI', {name: 'BMI Calculator'})
        }/>
      <Button title="About"
        onPress={() =>
          navigation.navigate('About', {name: 'About'})
        }/>
    </View>
  );
};
const Squats = ({ navigation, route }) => {
  return (
    <LearnTo url='https://i2.wp.com/powerfullyyoufitness.com/wp-content/uploads/2018/01/Proper-Squat-Form.png?ssl=1'/>
  )
};
const Deadlift = ({ navigation, route }) => {
  return (
    <LearnTo url='https://i1.wp.com/physicalculturestudy.com/wp-content/uploads/2016/01/romaniandeadlift1.jpg?resize=563%2C331&ssl=1'/>
  )
};
const MaximumLift = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is a loose guide for the weight to start for each different lift</Text>
      <Button title="Deadlift"
        onPress={() =>
          navigation.navigate('MaxDeadlift', {name: 'Maximum MaxDeadlift'})
        }/>
      <Button title="Back Squat"
        onPress={() =>
          navigation.navigate('MaxBackSquat', {name: 'Maximum BackSquat'})
        }/>
      <Button title="Custom Workout"
        onPress={() =>
          navigation.navigate('CustomWO', {name: 'Custom Workout'})
        }/>
    </View>
  )
};
const MaxDeadlift = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <MaxLift lift='deadlift'/>
    </View>
  )
}
const MaxBackSquat = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <MaxLift lift='backsquat'/>
    </View>
  )
}
const BMI = ({ navigation, route }) => {
  return (
    <BMIcalc/>
  )
}
const About = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState(" Leave Feedback...");
  return (
    <View style={styles.container}>
      <Text>Created by Daniel Lay</Text>
      <Text>Email: dlay@brandeis.edu</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
    </View>
  )
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection:'row',
  },
  helloText: {
    fontSize: 40,
    color: 'blue'
  },
  logo:{
    width: 1526,
    height: 900,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
