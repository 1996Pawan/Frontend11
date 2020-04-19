import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        fname:'',
        lname:''
    };
}

  handleSubmit = (e) => {
    e.preventDefault();
    const {
        email,
        password,
        fname,
        lname
    } = this.state;
  if (this.validateEmail(email, password, fname, lname)) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // API Call
    fetch('http://localhost:8082/addUser', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            name: `${fname} ${lname}`,
            email: email,
            password: password
        })
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data.status);
        if (data.status) {
            console.log("Login Passed");
            alert("Successfully registered, Please proceed to login");
            this.props.history.push("/")

        } else {
            console.log("Login Failed");
            alert("!!Email is already Exit");
            this.props.history.push("/signup")
        } 
        
    }).catch((err) => console.log(err))
}
}


/*Function for validate email id , password ,fname,lname*/
 validateEmail=(email, password, fname, lname) =>{

const fnamePattern = /^[a-zA-Z]{2,20}$/;
const lnamePattern = /^[a-zA-Z]{2,20}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (password === '' || email === '' || fname === '' || lname === '') {
    alert("Fields are Empty !!");
    return false;
} else if (!fnamePattern.test(fname)) {
    alert("Enter valid First name!!");
    return false;
} else if (!lnamePattern.test(lname)) {
    alert("Enter valid Last name!!");
    return false;
} else if (!emailPattern.test(email)) {
    alert("Enter valid Email !!");
    return false;
} else {
    return true;
}

}

    render() {
        return ( 
        <div >
 <div className="container">
 <div className="main" style={{background:'lightgray'}}>
    <div class="menustyle"><h1>SIGN UP</h1></div><br></br>
    <form onSubmit={this.handleSubmit}>
        <div className="form-labels">
          <label style={{colour:'black'}}>First Name :</label>
          <input type="text"  value={this.state.fname} onChange={(e) => this.setState({fname: e.target.value})} id="fname" placeholder="First Name" />
        </div>
        <div className="form-labels">
          <label style={{colour:'black'}}>Last Name :</label>
          <input type="text" value={this.state.lname} onChange={(e) => this.setState({lname: e.target.value})} id="lanme" placeholder="Last Name" />
        </div>
        <div className="form-labels">
<label style={{bcolour:'black'}}>Email :</label>
<input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} id="email" placeholder="Enter Valid Email" />
</div>
       <div className="form-labels">
<label style={{colour:'black'}}>Password :</label>
<input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} id="password" placeholder="Password"  />
</div>
        <input type="submit" value="Submit" style={{background:"skyblue"}} />
        <button ><Link to="/"  style={{colour:"black"}}>Cancle</Link></button>
    
        </form>
    </div>
  </div>
            
            </div>
        )
    }
}