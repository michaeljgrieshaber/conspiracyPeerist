import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'


export default function OnePost(props) {
  const { posts } = props
  const { id } = useParams();
  const [post, setPost] = useState(null)
  
  console.log(posts)

  useEffect(() => {
  
    setPost(posts.find(element => element.id === Number(id)))



    },[])

  // const post = posts.find(element => element.id === Number(id))



  console.log(post)
  
  

  return (
    <div>
      <p>one post</p>
      {/* <p>{post.title}</p> */}
      {/* <p>By: {post.user.username}</p> */}
    </div>
  )
}
