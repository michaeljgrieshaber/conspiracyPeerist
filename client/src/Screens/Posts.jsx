

export default function Posts(props) {
  const { posts } = props

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
      
    </div>
  )
}
