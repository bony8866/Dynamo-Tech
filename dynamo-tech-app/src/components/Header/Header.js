import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Dynamo Tech</a>
                </nav>
            </div>
        );
    }
}

export default Header;