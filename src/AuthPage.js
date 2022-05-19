import { useState } from 'react';
import { getUser, signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(email, password);
    const user = getUser();
    setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(email, password);
    setUser(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          Password
          <input onChange={(e) => setPassword(e.target.value)}></input>
        </label>
      </form>

      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>
          Email
          <input onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          Password
          <input onChange={(e) => setPassword(e.target.value)}></input>
        </label>
      </form>
    </div>
  );
}
