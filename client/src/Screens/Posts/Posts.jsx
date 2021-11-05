import {Link} from 'react-router-dom'

export default function Posts(props) {
  const { posts } = props

  return (
    <div>
      <h2>Posts</h2>
      <Link to='/makepost'>Create a post</Link>
      {posts.map((post) => (
        <div key={`post${post.id}`}>
          <p>{post.title}</p>
        </div>
      ))}
      
    </div>
  )
}