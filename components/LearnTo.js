import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const LearnTo = (props) => {
  const [weight, setWeight] = React.useState(0);
  return (
  <View style={styles.container}>
      <Image
          style= {styles.logo}
          resizeMode='contain'
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
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default LearnTo;
