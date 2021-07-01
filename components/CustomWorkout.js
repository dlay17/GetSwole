import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoList = (props) => {
  const [lift,setLift] = useState("")
  const [mnovice, setMNovice] = useState("")
  const [maverage, setMAverage] = useState("")
  const [madvance, setMAdvance] = useState("")
  const [melite, setMElite] = useState("")
  const [wnovice, setWNovice] = useState("")
  const [waverage, setWAverage] = useState("")
  const [wadvance, setWAdvance] = useState("")
  const [welite, setWElite] = useState("")
  const [customWorkout,setcustomWorkout]= useState([])

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@CustomWorkouts')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setcustomWorkout(data)
            console.log('just set Information for the table')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@CustomWorkouts', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
        }
  }


  const renderWorkout = ({item}) => {
    const weight = 100
    return (
      <View style={{border:'thin solid red'}}>
        <Text style={styles.headerText}>{item.lift}</Text>
        <Text style={styles.todoItem}>
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
                 <td>{Math.round(weight*item.mnovice)}</td>
                 <td>{Math.round(weight*item.maverage)}</td>
                 <td>{Math.round(weight*item.madvance)}</td>
                 <td>{Math.round(weight*item.melite)}</td>
               </tr>
               <tr>
                 <th scope="row">Women</th>
                 <td>{Math.round(weight*item.wnovice)}</td>
                 <td>{Math.round(weight*item.waverage)}</td>
                 <td>{Math.round(weight*item.wadvance)}</td>
                 <td>{Math.round(weight*item.welite)}</td>
               </tr>
             </tbody>
           </table>
        </Text>
      </View>
    )
  }

  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         mens is ({mnovice}), ({maverage}), ({madvance}), ({melite})
      </Text>
      <Text>
         Womens is ({wnovice}), ({waverage}), ({wadvance}), ({welite})
      </Text>
      <Text>
         todoItems is {JSON.stringify(customWorkout)}
      </Text>
  </View>);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Custom Workout list </Text>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter lift"
          onChangeText={text => {
               setLift(text);
             }}
          value = {lift}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Men's novice lift goal"
          onChangeText={text => {
               setMNovice(text);
             }}
          value = {mnovice}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Men's average lift goal"
          onChangeText={text => {
               setMAverage(text);
             }}
          value = {maverage}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Men's advance lift goal"
          onChangeText={text => {
               setMAdvance(text);
             }}
          value = {madvance}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Men's elite lift goal"
          onChangeText={text => {
               setMElite(text);
             }}
          value = {melite}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Women's novice lift goal"
          onChangeText={text => {
               setWNovice(text);
             }}
          value = {wnovice}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Women's average lift goal"
          onChangeText={text => {
               setWAverage(text);
             }}
          value = {waverage}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Women's advance lift goal"
          onChangeText={text => {
               setWAdvance(text);
             }}
          value = {wadvance}
        />
      </View>
      <View>
        <TextInput
          style={{height: 20}}
          placeholder="Enter Women's elite lift goal"
          onChangeText={text => {
               setWElite(text);
             }}
          value = {welite}
        />
      </View>
      <View>
        <Button
           title={"add"}
           color="blue"
           onPress = {() => {
             const newCustomWorkout =
               customWorkout.concat(
                 {'lift':lift,
                 'mnovice':mnovice,
                 'maverage':maverage,
                 'madvance':madvance,
                 'melite':melite,
                 'wnovice':wnovice,
                 'waverage':waverage,
                 'wadvance':wadvance,
                 'welite':welite,
               })
             setcustomWorkout(newCustomWorkout)
             storeData(newCustomWorkout)
             setLift("")
             setMNovice("")
             setMAverage("")
             setMAdvance("")
             setMElite("")
             setWNovice("")
             setWAverage("")
             setWAdvance("")
             setWElite("")
           }}
           />
      </View>
      <FlatList
        data={customWorkout}
        renderItem={renderWorkout}
        keyExtractor={item => item.lift}
      />
      {debug?debugView: <Text>""</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  todoItem:{
    justifyContent:'center',
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 16,
    padding:10,
    color: 'blue'
  },

});


export default ToDoList;
