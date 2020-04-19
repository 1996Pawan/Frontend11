import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class viewType extends Component {

     searchByType(event) {
        const param = document.getElementById("search-by-type").value;
       const renderPath = document.getElementById("result-by-type");
        event.preventDefault();
        fetch(`http://localhost:8082/getType?typeRequest=${param}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderData(renderPath, data);
            });
    }

     renderData(path, data) {
        console.log('length greater than 1');
        const markup = '';
      const tr = document.getElementById("result-name1");
        data.forEach((element, index) => {
            // markup=`<td>${element.type}</td> <td>${element.message}</td><td> ${element.code}</td>`;


            const row = tr.insertRow(1);
            const messageType = row.insertCell(0);
            const messageName = row.insertCell(1);
            const messageCode = row.insertCell(2);
            messageType.innerHTML = `${element.type}`
            messageName.innerHTML = `${element.message}`
            messageCode.innerHTML = ` ${element.code}`;

        });
        //path.innerHTML = markup;



    render() {
        return (
            <div>
                    <div class="container">
        <div class="main">
            <form onsubmit="searchByType(event)" action="#" method="GET" id="search-by-type1" class="form-class">
                <h2>Enter type here</h2><br />
                <input type="text" id="search-by-type" placeholder="Enter type"></input><br />
                <input type="submit" value="Submit"></input>
                <button class="proceed-to-login2" ><Link to="option.html" >BACK</Link></button>
            </form>

        </div><br /><br /><br />
        <h3><br /><br />Result:</h3>
        <table id="result-name1">
            <tr>
                <th>Message type</th>
                <th>Message Name</th>
                <th>Message Code</th>
            </tr>
        </table>

        <div class="result1" id="result-by-type"></div>
    </div><br /><br /><br />
            </div>
        )
    }
}
