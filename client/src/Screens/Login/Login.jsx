import { useState } from 'react'

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
        <button>Submit</button>
      </form>
    </div>
  )
}