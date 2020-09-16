import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavbarBrand } from 'reactstrap'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <NavbarBrand href="/">Logo Here</NavbarBrand>
                </nav>
            </header>
        )
    }
}

export default Header