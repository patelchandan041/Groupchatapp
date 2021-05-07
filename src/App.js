import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './components/Login';
import { auth } from './firebase'
import Spinner from 'react-spinkit'



function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
 <AppLoading>
 <AppLoadingContents>
   
   <Spinner
    name="ball-spin-fade-loader"
    color="purple"
    fadeIn="none"
    />
 </AppLoadingContents>
 </AppLoading>
    );
  }

  return (
    <div className="App">
     <Router>
       {!user ? (
        <Login />
       ):(
        <>
        <Header />
        <AppBody>
       <Sidebar />
       <Switch>
         <Route path="/">
          <Chat />
         </Route>
       </Switch>
       </AppBody>
      
       </>
       )}
       
     </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;

const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%;
`;

const AppLoadingContents = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;