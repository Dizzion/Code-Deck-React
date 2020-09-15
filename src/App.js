import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Routes from './Routes/Routes'

function App(props) {

  const [user, setUser] = useSessionStorage("user", null)

  const storeUser = (user) => {
    setUser(user)
  }

  const logout = async (e) => {
    e.preventDefault()
    await sessionStorage.clear()
    await setUser(null)
    props.history.push('/')
  }

  return (
    <div className="App text-center">
      <Header user={user} logout={logout} />
      <Routes
        user={user}
        storeUser={storeUser}
      />
    </div>
  )
}


export default withRouter(App)


function useSessionStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}