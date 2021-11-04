import './App.css';
import Layout from './Layout/Layout';
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './Screens/Landing/Listing/Register/Login/Login';
import Register from './Screens/Landing/Listing/Register/Register';
import { useState, useEffect } from 'react'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'
import MainContainer from './Containers/MainContainer';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  },[])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/listing')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/listing')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }
  
  console.log(currentUser)

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
      
        <Switch>
        <Route path='/landing'>
          <h2>landing</h2>
          </Route>

        <Route path='/login'>
          <Login
          handleLogin={handleLogin}
          />
        </Route>

          <Route path='/register'>
            <Register
            handleRegister={handleRegister}
            />
          </Route>

          <Route path='/'>
            <MainContainer />
          </Route>

          <Route path='/view'>
            <h2>view</h2>
          </Route>

          <Route path='/create'>
            <h2>create</h2>
          </Route>

      </Switch>
      
      </Layout>
    </div>
  );
}

export default App;
