import {Link} from 'react-router-dom'

export default function Posts(props) {
  const { posts } = props

  function verify() {
    if (localStorage.length === 1) {
      return <Link to='/makepost'>Create a post</Link>
      } else {
    }
  }
  
  return (
    <div>
      <h2>Posts</h2>
      {verify()}
      {posts.map((post) => (
        <div key={`post${post.id}`}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}


