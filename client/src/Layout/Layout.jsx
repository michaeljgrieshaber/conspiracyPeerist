import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1><Link to='landing'>Conspiracy Theories</Link></h1>
        <Link to='/listing'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      <hr/>
      </header>
      {props.children}
    </div>
  )
}
