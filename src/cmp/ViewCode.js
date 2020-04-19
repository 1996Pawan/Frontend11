import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ViewCode extends Component {


         searchByCode(event) {
            var param = document.getElementById("search-by-code").value;
            var renderPath = document.getElementById("result-by-code");
            event.preventDefault();
            fetch(`http://localhost:8082/getCode?code=${param}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    renderData(renderPath, data);
                });
        }

         renderData(path, data) {
            console.log('length greater than 1');
            var markup = '';
            var tr = document.getElementById("result-name3");
            data.forEach((element, index) => {
                // markup=`<td>${element.type}</td> <td>${element.message}</td><td> ${element.code}</td>`;


                var row = tr.insertRow(1);
                var messageType = row.insertCell(0);
                var messageName = row.insertCell(1);
                var messageCode = row.insertCell(2);
                messageType.innerHTML = `${element.type}`
                messageName.innerHTML = `${element.message}`
                messageCode.innerHTML = ` ${element.code}`;

            });


        }


    render() {
        return (
            <div>
            <div class="container">
        <div class="main">
            <form onsubmit="searchByCode(event)" action="#" method="GET" id="search-by-code1" class="form-class">
                <h2>Enter Code here</h2><br />
                <input type="text" id="search-by-code" placeholder="Enter Code"></input><br />
                <input type="submit" value="Submit"></input>
                <button class="proceed-to-login2" ><Link to="option.html" >BACK</Link></button>
            </form>
        </div><br /><br /><br />
        <h3><br /><br />Result:</h3>
        <table id="result-name3">
            <tr>
                <th>Message type</th>
                <th>Message Name</th>
                <th>Message Code</th>
            </tr>
        </table>

        <div class="result1" id="result-by-code"></div>
    </div><br /><br /><br />
    
            </div>
        )
    }
}
