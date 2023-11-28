import React from 'react'
import { Link } from 'react-router-dom'

function Heading(){
    return <header>
    <img className="img-heading"src="/images/logo.png" alt="logo"></img>
    <h1>InsigneScout</h1>
    <div className='navBar'>
        <Link className='nav-link' to="/sign-in">Sign In</Link>
    </div>
    </header>
}

export default Heading