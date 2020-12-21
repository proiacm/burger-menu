import React, {Component} from 'react';
import './Sidenav.css';
import { slide as Menu } from 'react-burger-menu';

class Sidenav extends Component {

  render () {

    return (
      <div>
        <Menu width={ '15%' }>
             <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>    
      </div>
    );
  }
}

export default Sidenav;