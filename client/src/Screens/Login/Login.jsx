import { useState } from 'react'
import './login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleLogin(formData)
      }}>
          <div>Email:</div>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
        
          
          <div>Password:</div>
        <input
        type='password'
        name='password'
        value={password}
          onChange={handleChange} />
        <div>
        <button className='loginSubmitButton'>Submit</button>
        </div>
      </form>
    </div>
  )
}