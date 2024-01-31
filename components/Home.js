import React from 'react';
import Custom from './Custom';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native';

let test = 0

export default class Home extends React.Component {
    render () {
      return (
    <View style = {styles.view}>
      <Text>UWU</Text>
      <Text>Just to be popular</Text>
      <TouchableOpacity>
      <Text>Ceci est un test</Text>
      <Custom/>
      <TextInput
      placeholder="Entrez du texte cher guidon..."
      editable
      autoCorrect
      style = {{
        borderWidth: 1.0
      }}
      />
      </TouchableOpacity>
      <Button
      onPress={() => {
        
      }}
      title = "わたし は chokbar-です"
      />
 
    </View>
    )}
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    view: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textAlignVertical: "center"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });