import {Link} from 'react-router-dom'

export default function Posts(props) {
  const { posts } = props

  return (
    <div>
      <h2>Posts</h2>
      <Link>Create a post</Link>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
      
    </div>
  )
}
