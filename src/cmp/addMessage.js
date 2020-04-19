import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class addMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'',
            messageD: '',
            code: ''
             };
    }

/*Function to add message on messageDetails.html page*/
    handleChange=(event)=>{
        this.setState({message: event.target.value});
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const {
            type,
            messageD,
            code
        } = this.state;
    const params = (new URL(document.location)).searchParams;
    const user = params.get("user");
  

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // API Call
    fetch('http://localhost:8082/addCode', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                type: type,
                code: code,
                message: messageD,
                createdBy: user
            })
        }).then((res) => res.json())
        .then((data) => {
            if (data.status === true) {
                alert("Message successfully added!");
                this.props.history.push("/addScreen")
            } else {
                alert("Duplicate Code!");
             
            }
        }).catch((err) => console.log(err))
}
    
    render() {
        return (
            <div>
                <div class="container">
        <div class="main">
            <form  onSubmit={this.handleSubmit} method="POST" id="addMessage_Form-id" class="form-class">
                <h2>Add Message Details</h2><br />
                <label for="cars">Message Type:<br /></label>
                  <select  name="message" value={this.state.message} onChange={this.handleChange} id="message-type" placeholder="Select type">
                  <option value="select-type">Error</option>
                  <option value="client-error">Client Error</option>
                  <option value="server-error">Server Error</option>
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                </select><br />
                <label>Message Information :</label>
                <input type="text" name="messageD" value={this.state.messageD} onChange={(e) => this.setState({messageD: e.target.value})} id="message-info" placeholder="Enter Description" /><br />
                <label>Message Code :</label>
                <input type="text" name="error" value={this.state.error} onChange={(e) => this.setState({error: e.target.value})}id="message-code" placeholder="Enter Code" ></input><br />
                <input type="submit" style={{background:'skyblue'}} value="Submit" />
                <button className="proceed-to-login2" ><Link to="/addScreen"  style={{colour:"black"}}>Back</Link></button>
                
            </form>
        </div>
    </div>
</div>
        )
    }
}

export default addMessage;