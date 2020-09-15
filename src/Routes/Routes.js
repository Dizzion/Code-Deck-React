import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Show from '../Pages/Show'

import Register from '../Pages/Register'
import Login from '../Pages/Login'

export default (props) => (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/register' component={ Register } />
        <Route path='/login' render={ (routeComponentProps) => {
            return <Login
                        {...routeComponentProps}
                        user={props.user}
                        storeUser={props.storeUser}
                    />
        }   }   />
        <Route path='/:id' component={ Show } />
    </Switch>
)
