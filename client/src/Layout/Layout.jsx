import {Link} from 'react-router-dom'

export default function Layout(props) {
  const {children, currentUser}= props

  return (
    <div>
      <header>
        <h1><Link to='landing'>Conspiracy Theories</Link></h1>
        {
          currentUser ? <div>something</div> :
            <div>
        <Link to='/listing'>Home</Link>
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
