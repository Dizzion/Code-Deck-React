import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavbarBrand } from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav row-col-1 row-col-md-3 navbar-dark sticky-top">
                    <NavbarBrand className="col-6" href="/">
                        <img className="img-thumbnail" src="/LogoCodeDeck.png" alt="Logo Here" />
                    </NavbarBrand>
                    <div className="navbar-nav mr-auto col-4">
                        {this.props.user ?
                            <ul className="navbar-nav mr-auto row-col-1 row-col-md-3">
                                <li className="navbar-item mt-3 col"><Link className="navbar-link" to={'/Profile'}>Profile</Link></li>
                                <li className="navbar-item mt-3"><button className="navbar-link btn" onClick={this.props.logout}>Logout</button></li>
                            </ul>
                            :
                            <div className="row-col-1 row-col-md-2">
                                <Link className="btn btn-dark mb-3 col-2" to={'/Register'}>Register</Link>
                                <div></div>
                                <Link className="btn btn-dark mt-3 col-2" to={'/Login'}>Login</Link>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header