import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class viewMessage extends Component {
    render() {
        return (
            <div>
            <div class="container">
    <div class="main">
        
    <form>
    <h2>Choose any one option</h2><br /> 
    <button><Link  to="/viewType"><h3>Search By Type</h3></Link></button>
    <button class="proceed-to-login3"><Link  to="/viewCode"><h3>Search By Code</h3></Link></button>
    <button class="proceed-to-login4"><Link  to="/viewMessageDetails"><h3>Search By Message Name</h3></Link></button>
     <button class="proceed-to-login2"><Link to="/addScreen">BACK</Link></button>
 </form>
        </div>
    </div>
                
            </div>
            )
        }
    }
