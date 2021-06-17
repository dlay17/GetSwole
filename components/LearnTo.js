import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const LearnTo = (props) => {
  const [weight, setWeight] = React.useState(0);
  return (
  <View style={styles.container}>
      <Image
          style= {styles.logo}
          source={{
            uri: props.url,
          }}
      />
      <Text>Here is good form</Text>
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

export default LearnTo;
