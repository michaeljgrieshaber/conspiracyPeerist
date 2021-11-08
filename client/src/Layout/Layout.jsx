import './layout.css';
import { Link } from 'react-router-dom'

export default function Layout(props) {
  const {children, currentUser, handleLogout}= props

  return (
    <div>
      <div className='header'>
        <div className='landing'>
          <Link to='/' className='landingLink'>
            Conspiracy Peerist
          </Link>
        </div>
        {
          currentUser ? 
            <div className='headerTagsLoggedIn'>
              <div className='welcome'>Welcome {currentUser.username}</div>
              <div ><Link to='/posts' className='homeLink'>Home</Link></div>
              <div className='logoutButton'><button onClick={handleLogout}>Logout</button></div>
            </div>
            :
            <div className='headerTagsLoggedOut'>
              <div><Link to='/posts' className='homeLink'>Home</Link></div>
              <div><Link to='/register' className='registerLink'>Register</Link></div>
              <div><Link to='/login' className='loginButton'>Login</Link></div>
            </div>
          }
      </div>
      {children}
    </div>
  )
}
