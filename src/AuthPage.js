import React, { useState } from 'react';
import { getUser, signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken }) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(signInEmail, signInPassword);
    const user = await getUser();
    setToken(user.access_token);
    setEmail(user.user.email);
    console.log(user);
    clearForms();
  }

  async function handleSignUp(e) {
    e.preventDefault();
    await signUp(signUpEmail, signUpPassword);
    const user = await getUser();
    setToken(user.access_token);
    setEmail(user.user.email);
    clearForms();
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input
            value={signInPassword}
            type="password"
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </label>
        <button>Sigh In</button>
      </form>

      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>
          Email
          <input value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input
            value={signUpPassword}
            type="password"
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
