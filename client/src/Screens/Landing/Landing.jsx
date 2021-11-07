import { Link } from 'react-router-dom'
import './landing.css';


export default function Landing() {
  return (
    <div className='landingDiv'>
        <img className='money' src='https://images.unsplash.com/photo-1521579772986-45a33628a34e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWxsdW1pbmF0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='illuminati'/>
      <Link to='/posts'><button className='truthButton'>Unveil the Truth Now!</button></Link>
    </div>
  )
}
