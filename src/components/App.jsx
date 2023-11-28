import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import SignIn from './signIn/SignIn';

function App(){
    return <div>
    <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/sign-in' element={ <SignIn />} />
    </Routes>
    </div>
}

export default App;