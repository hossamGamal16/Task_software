import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { forgetPassword } from '../firebase/Auth'; // Adjust the import statement

const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      const credentials = await forgetPassword(email);
      alert("Check your email for password reset instructions.");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgetPassword}>
        <Text style={styles.buttonText}><Text>Submit</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
