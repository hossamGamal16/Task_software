import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Verify = () => {
  const handlesendcode=()=>{
    
  }
  const [code,setcode]=useState("")
  return (
    <View><Text>your account need verification </Text>
      <TextInput
        style={styles.input}
        placeholder="code"
        onChangeText={(text) => setcode(text)}
        value={email}
      />
      <Pressable onPress={handlesendcode} >submit</Pressable>
    </View>
  )
}

export default Verify

const styles = StyleSheet.create({})