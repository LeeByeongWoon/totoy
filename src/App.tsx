import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Store, Home } from './pages';
import { StoresProvider } from 'lib/useAsync';
import Register from 'pages/Register';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Header } from 'components/base';
import oc from 'open-color';

const GlobalStyles = createGlobalStyle`
  ${reset};

  a{
    text-decoration:none;
    color:black;
  }

`
const Positioner = styled.div`
    width: 100%;
    height: calc(100% - 60px); 

    position: relative;
    display: flex;
    flex-grow: 1;
    
    align-items:center;
    justify-content:center;
    background: ${oc.gray[7]};
`;

function App() {
  return (
    <StoresProvider>
      <GlobalStyles />
      <Header />
      <Positioner>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect path="/home" to="/" />
          <Route path="/store" component={Store} />
          <Route path="/register" component={Register} />
          <Route render={() => "페이지를 찾을 수 없습니다."} />
        </Switch>
      </Positioner>
    </StoresProvider>
  );
}

export default App;
