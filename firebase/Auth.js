import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,sendPasswordResetEmail} from 'firebase/auth';
import Firebase_Auth from './Config'
async function login(email, password) {
  
  return await signInWithEmailAndPassword(Firebase_Auth, email, password);
}
const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(Firebase_Auth, email, password);
    
    return { success: true };
  } catch (error) {
    console.log('Error registering user:', error);
    return { success: false, error: error.message };
  }
};

async function forgetPassword(email) {
  try {
    const cred = await sendPasswordResetEmail(Firebase_Auth,email);
    return cred;
  } catch (error) {
    // Handle error if sending password reset email fails
    console.error('Error sending password reset email:', error);
    throw error;
  }
}

export { register, login ,forgetPassword};

