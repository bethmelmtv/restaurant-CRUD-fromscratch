// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { logout } from './services/fetch-utils';
import { Browser as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import CreatePage from './CreatePage';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import './App.css';

export default function App() {
  //make debit card (states) so children can pass info back to parents via a callback/debit card
  //tracks user state, passing the setUser callback to the AuthPage

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  //Use a ternary to decide whether to let users visit particular routes, depending on whether there
  //is a user in App.js state

  return (
    //If user is logged in, header contains logout button and links to the Create and List pages.
    <Router>
      {currentUser && (
        <nav>
          <button> Logout</button>
          <Link to="/create">Create</Link>
          <Link to="/list">List</Link>
          <button onClick={logout}>LogOut</button>
        </nav>
      )}
      <div>
        <Switch>
          <Route exact path="/">
            {!currentUser ? (
              <AuthPage to="/" setCurrentUser={setCurrentUser} />
            ) : (
              <Redirect to="/items" />
            )}
          </Route>
          <Route exact path="/items">
            {!currentUser ? <Redirect to="/" /> : <ListPage />}
          </Route>
          <Route exact path="/create">
            {!currentUser ? <Redirect to="/" /> : <CreatePage />}
          </Route>
          <Route exact path="/items/:id">
            {!currentUser ? <Redirect to="/" /> : <UpdatePage />}
          </Route>
          `
        </Switch>
      </div>
    </Router>
  );
}
