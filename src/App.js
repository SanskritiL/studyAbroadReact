import React, { Component } from 'react';
import './css/app.css';
import logo from './assets/logo.png' ;
import coffee from './assets/coffee.png';
import searchicon from './assets/search.png';
import contact from './assets/contact.png';
class App extends Component{
  render(){
    return(
    <nav class="white">
      <div class="nav-wrapper">
        <img src={logo} width="100" height="80" class="brand-logo"/>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            
              <li class="navbar-icon">
                <a href="ddd.html">
                  <img src={coffee} width="50" height="50"/>
                </a>
              </li>
              <li class="contact-icon navbar-icon" >
                <a href="bages.html">
                  <img src={contact} width="50" height="50" />
                </a>
              </li>
             
        </ul>
      </div>
  </nav>
    )
  }
}


export default App;
