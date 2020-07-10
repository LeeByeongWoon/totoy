import React from 'react';
import './App.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { Home, Store } from './pages';
import { StoresProvider } from 'lib/useAsync';

function App() {
  return (
    <StoresProvider>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/store">store</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />
        <Route path="/store" component={Store} />
        <Route render={() => "페이지를 찾을 수 없습니다."} />
      </Switch>
    </StoresProvider>
  );
}

export default App;
