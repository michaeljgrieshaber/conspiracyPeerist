import './App.css';
import Layout from './Layout/Layout';
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
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
    history.push('/posts')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/posts')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }
  

  return (
    <div className="App">

      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
      
        <Switch>



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
            <MainContainer
            currentUser={currentUser}
            />
          </Route>

        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;
