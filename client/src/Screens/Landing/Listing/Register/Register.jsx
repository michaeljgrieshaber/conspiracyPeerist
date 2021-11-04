import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  })

  const {email, password, username} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]:value
    }))
  }
  return (
    <div>
         <h2>Register</h2>
      <form>
      <lable>
          Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
        </lable>
        <lable>
          Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
        </lable>
        <lable>
          Password:
        <input
        type='password'
        name='password'
        value={password}
          onChange={handleChange}/>
          </lable>
        <Link><button>Submit</button></Link>
      </form>
    </div>
  )
}
