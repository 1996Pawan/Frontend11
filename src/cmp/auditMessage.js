import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class auditMessage extends Component {

/* Function to get all result from data base on audit screen.html*/
 getAllResult=(e)=> {
    e.preventDefault();
    //window.location.href = "/AuditScreen.html";
    setTimeout(() => {
        const renderPath = document.getElementsByClassName("result-section");
        const markup = '';

        fetch('http://localhost:8082/getAudit')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach(element => {
                    markup = markup + `<div class="result"><label>Message Type:</label> <p>${element.type}</p> <label>Message Code:</label> <p>${element.code}</p> <label>Message Name:</label>
    <p>${element.message}</p> <label>Message Created By:</label> <p>${element.createdBy}</p>
    <div>`;
                });
                renderPath.innerHTML = markup;
            });
    }, 1000);
}


    render() {
        return (
            <div>
    <div class="container">
        <div class="main">
            <h2>AuditScreen</h2><br />
          
            <input type="text" placeholder="Search.." id="search-text" name="search"></input>
            <button onClick="searchByType(event)">Search By Type</button>
            <button onClick="searchByName(event)">Search By Name</button>
            <button onClick="searchByCode(event)">Search By Code</button>
            <button onClick="getAllResults(event)">Reset</button>
                <br />
           <table>           <tr>
            <th>Message Type</th>
            <th>Message Code</th>
            <th>Message Name</th>
            <th>Message CreatedBy</th>
    </tr></table>
 
            <table id="result-section"></table>
           
         
         <button class="proceed-to-login2" ><Link  to="/addScreen">BACK</Link></button>
          
        </div>
    </div>
            </div>
        )
    }
}
