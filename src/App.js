// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { logout, getUser } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import CreatePage from './CreatePage';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import './App.css';

export default function App() {
  //make debit card (states) so children can pass info back to parents via a callback/debit card
  //tracks user state, passing the setUser callback to the AuthPage

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      // console.log(user);
      if (user) {
        setEmail(user.user.email);
        setToken(user.access_token);
      }
    }
    fetch();
  }, []);

  return (
    //If user is logged in, header contains logout button and links to the Create and List pages.
    <Router>
      {token && (
        <>
          <Link to="/create">Create</Link>
          <Link to="/items">List</Link>
          <button onClick={logout}>LogOut</button>
        </>
      )}
      <div>
        <Switch>
          <Route exact path="/">
            {!token ? (
              <AuthPage to="/" setToken={setToken} setEmail={setEmail} />
            ) : (
              <Redirect to="/items" />
            )}
          </Route>
          <Route exact path="/items">
            {!token ? <Redirect to="/" /> : <ListPage />}
          </Route>
          <Route exact path="/create">
            {!token ? <Redirect to="/" /> : <CreatePage />}
          </Route>
          <Route exact path="/items/:id">
            {!token ? <Redirect to="/" /> : <UpdatePage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
