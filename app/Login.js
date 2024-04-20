import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { login, register } from '../firebase/Auth';
import auth from '../firebase/Config'; // Assuming Firebase_Auth is here
import { router } from 'expo-router';
import Firebase_Auth from "../firebase/Config"


const Login = () => {
 

  const handlelogin = async () => {
    try {
      const credentials = await login(email, password);
      router.push("/Dashboard")
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  
  const forgetPass=()=>{
    router.push('/ForgetPass')
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text>login</Text> </Text>
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
      
      <Pressable onPress={handlelogin} style={styles.button}>
        <Text style={styles.buttonText}><Text>login</Text></Text>
      </Pressable>
     <Pressable onPress={forgetPass}><Text>i forget my password</Text> </Pressable>
    </View>
  );
};

export default Login;

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
