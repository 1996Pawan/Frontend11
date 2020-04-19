import React from 'react';
import { withRouter } from 'react-router';
import '../App.css';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';

class Auth extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
}


handleSubmit = (e) => {
    e.preventDefault();
    const {
        email,
        password
    } = this.state;
    if (this.validateEmail(email, password)) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        // API Call
        fetch('http://localhost:8082/validateUser', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === false) {
                    console.log("Login Failed");
                    alert("!login Failed, Enter Valid Email or Password")
                    this.props.history.push("/")
                } else {
                    console.log("Login Passed");
                    alert("Login successfully")
                    this.props.history.push("/addScreen")
                }
            }).catch((err) => console.log(err))
    }
};

validateEmail = (email, password) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (password === '' || email === '') {
        alert("Fields are empty!!");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Enter the valid email and password!!");
        return false;
    } else {
        return true;
    }
}

render() {
return (
<div className="container" >
<div className="main" tyle={{background:'lightgray'}}>
<div class="menustyle"><h1>LOGIN</h1></div><br></br>
<form onSubmit={this.handleSubmit}>
<div className="form-labels">
<label>Email :</label>
<input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} id="email" placeholder="Valid Email" />
</div>
<div className="form-labels">
<label>Password :</label>
<input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} id="password" placeholder="Password"  />
</div>
<input type="submit" name="submit_id" id="btn_id" value="Submit" style={{colour:'white', background:'skyblue'}}  />

<div><Link  to="/signup" style={{ textDecoration: 'none',color:'black'}}>SignUp</Link></div>

</form>
</div>
</div>
);
}
}

export default withRouter(Auth);
