import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
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
      <form>
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
