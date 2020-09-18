import React, { Component } from 'react'
import AuthService from '../Service/AuthService'

class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.password === this.state.password2) {
            AuthService.register(this.state.username, this.state.password)
                .then(data => {
                    this.setState({
                        username: '',
                        password: '',
                        password2: ''
                    })
                    this.props.history.push('/login')
                })
        } else {
            alert('Passwords Do Not Match')
        }
    }

    render() {
        return (
            <div className="container-sm">
                <h3>Register!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-signup">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.username} />
                    </div>
                    <div className="form-signup">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <div className="form-signup">
                        <label htmlFor="password2" className="sr-only">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                            value={this.state.password2} />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Submit Registration!</button>
                </form>
            </div>
        )
    }
}

export default Register