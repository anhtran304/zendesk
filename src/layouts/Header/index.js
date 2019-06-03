import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Header class component
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to = "#" className="navbar-brand" >Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <Link to = "#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                                G' day, mate
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to = "#" className="dropdown-item" >Profile</Link>
                                <Link to = "#" className="dropdown-item" >Settings</Link>
                                <div className="dropdown-divider"></div>
                                <Link to = "#" className="dropdown-item" >Logout</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
  }
}

export default Header;