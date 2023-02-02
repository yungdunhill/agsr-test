import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/" component={HomePage}/>
        </Switch>
    );
}


export default App;