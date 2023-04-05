import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { navigateTo } from '../main.js';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAH8HZslRIokAuOxqVA1hnrZtki-yblyuw',
  authDomain: 'social-network-8a6da.firebaseapp.com',
  databaseURL: 'https://social-network-8a6da-default-rtdb.firebaseio.com',
  projectId: 'social-network-8a6da',
  storageBucket: 'social-network-8a6da.appspot.com',
  messagingSenderId: '142278931596',
  appId: '1:142278931596:web:aac9932ea28474e45437a9',
  measurementId: 'G-R9K8Y36WJ1',
});
const auth = getAuth(firebaseApp);

const loginErrorMessage = 'Correo o contraseña incorrecta';

const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
const loginError = document.getElementById('login-error');

const loginWithEmailPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigateTo('/wall');
  } catch (error) {
    loginError.textContent = loginErrorMessage;
  }
};

export const handleLoginEmail = async () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  await loginWithEmailPassword(email, password);

  loginPassword.value = '';
};