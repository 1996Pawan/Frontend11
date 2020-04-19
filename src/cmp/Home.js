import React, { Component } from 'react'

import {Link} from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div className="Homestyle">
               <ul style={{background:'lightblue'}}>
                   <li ><h1>CustomerXps</h1></li>
                   {/* <li><Link  to="login" style={{ textDecoration: 'none', color:'black'}}>Log In</Link></li>
                   <li><Link  to="signup" style={{ textDecoration: 'none',color:'black'}}>Sign Up</Link></li> */}
               </ul>
               
            </div>
        )
    }
}