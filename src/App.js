// import logo from './logo.svg';
import './App.css';
import { useState, useEffefct } from 'react';
import { getUser } from './services/fetch-utils';
import { Browser as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import CreatePage from './CreatePage';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  //make debit card... (states) so children can pass info back to parents via a callback/debit card

  return (
    <>
      <Switch>
        <Route exact path="/">
          <AuthPage />
        </Route>

        <Route exact path="">
          <CreatePage />
        </Route>

        <Route exact path="">
          <ListPage />
        </Route>

        <Route exact path="">
          <UpdatePage />
        </Route>
      </Switch>
    </>
  );
}

// export default App;
