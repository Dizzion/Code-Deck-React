import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../Service/AuthService'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        await AuthService.login(this.state.username, this.state.password)
            .then(res => {
                console.log(res)
                if (!res.data.data) {
                    return false
                }
                let user = {
                    token: res.data.data,
                    username: this.state.username
                }
                this.props.storeUser(user)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container-sm">
                <div className="body container">
                    <form className="form-signin mt-5" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control mb-2"
                            onChange={this.handleChange}
                            value={this.state.username}
                            placeholder="Username" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-2"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Password" />
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>
                    <Link className="btn btn-lg btn-success btn-block mt-3" to="/Register">Register Here!</Link>
                </div>
            </div>
        )
    }
}

export default Login