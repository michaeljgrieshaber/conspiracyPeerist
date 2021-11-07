import { Link } from 'react-router-dom'
import './posts.css'

export default function Posts(props) {
  const { posts } = props

  function verify() {
    if (localStorage.length === 1) {
      return <Link to='/makepost' className='makePostLink'>Create a post</Link>
      } else {
    }
  }
  
  return (
    <div>
      <div className='postsHeader'>Posts</div>
      {verify()}
      {posts.map((post) => (
        <div key={`post${post.id}`}>
            <div className='postCardContainer'>
            <Link to={`/posts/${post.id}`}
            className='postCardLink'>
            <div className='postCard'>{post.title}</div>
          </Link>
            </div>
        </div>
      ))}
    </div>
  )
}


