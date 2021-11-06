import {Link} from 'react-router-dom'

export default function Layout(props) {
  const {children, currentUser, handleLogout}= props

  return (
    <div>
      <header>
        <h1><Link to='landing'>Conspiracy Peerist</Link></h1>
        {
          currentUser ? <div>
            <p>Welcome {currentUser.username}</p>
            <Link to='/posts'>Home</Link>
            <button onClick={handleLogout}>Logout</button></div> :
            <div>
        <Link to='/posts'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        </div>
          }
      <hr/>
      </header>
      {children}
    </div>
  )
}
