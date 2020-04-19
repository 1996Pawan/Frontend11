import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class addScreen extends Component {
    render() {
        return (
            <div>
     <div class="container"><br /><br />
        <div class="main"><br />
            <form >
                <h2>ADD OR VIEW MESSAGE SCREEN</h2><br  />
               
                <button  style={{colour:'black'}}><Link  to="/addMessage"  ><h3>ADD MESSAGE</h3></Link></button>
     <button className="proceed-to-login" style={{colour:'black'}}><Link  to="/viewMessage"><h3>VIEW MESSAGE</h3></Link></button>
     <button className="proceed-to-login" style={{colour:'black'}}><Link  to="/auditMessage"><h3>GO TO AUDIT SCREEN</h3></Link></button>
     <button className="proceed-to-login2" ><Link to="/"  style={{colour:"black"}}>Back</Link></button>
            </form>

        </div>
        <button className="proceed-to-login2" ><Link to="/"  style={{colour:"black"}}>Logout</Link></button>

    </div>
            </div>
        )
    }
}
export default addScreen;