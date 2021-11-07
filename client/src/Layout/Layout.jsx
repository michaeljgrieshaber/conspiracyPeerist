import './layout.css';
import { Link } from 'react-router-dom'

export default function Layout(props) {
  const {children, currentUser, handleLogout}= props

  return (
    <div>
      <div className='header'>
        <div className='landing'>
          <Link to='landing' className='landingLink'>
            Conspiracy Peerist
          </Link>
        </div>
        {
          currentUser ? <div>
            <div className='welcome'>Welcome {currentUser.username}</div>
            <div className='homeLink'><Link to='/posts'>Home</Link></div>
            <div className='loginButton'><button onClick={handleLogout}>Logout</button></div></div> :
            <div className='headerTags'>
        <div><Link to='/posts' className='welcome'>Home</Link></div>
        <div><Link to='/register' className='homeLink'>Register</Link></div>
        <div><Link to='/login' className='loginButton'>Login</Link></div>
        </div>
          }
      <hr/>
      </div>
      {children}
    </div>
  )
}
