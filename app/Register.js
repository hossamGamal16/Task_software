import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { login, register } from '../firebase/Auth';
import { router } from 'expo-router';
import Firebase_Auth from '../firebase/Config'
import db from '../firebase/FirestoreConfig'
import { doc, setDoc } from "firebase/firestore"; 



const Register = () => {
 
const addUser=async ()=>{
  const data = {
    email: email,
    
  };
try{ await setDoc(doc(db, "users", "new-city-id"), data);
alert("docment users created successfully ")}
catch(error){
  alert(error)

}
 
}

  const handleSignup = async () => {
    try {
      
      const credentials = await register(email, password);
     
     
      addUser();
      router.push("/Login")
    
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const handleHaveAccount=()=>{
    router.push('/Login')
    
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text>sign up</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true} // Uncomment to hide password
      />
      
      <Pressable onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}><Text>sign up</Text></Text>
      </Pressable>
      <Pressable onPress={handleHaveAccount}><Text>I am already have account</Text> </Pressable>
    </View>
  );
};

export default Register;

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
    marginBottom: 10,
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
