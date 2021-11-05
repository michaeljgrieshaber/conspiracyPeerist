import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import MakeComment from '../MakeComment/MakeComment'

export default function OnePost(props) {
  const { posts } = props
  const { id } = useParams();
  const [post, setPost] = useState(null)
  
  
  console.log(posts.length)
  useEffect(() => {
    const test = () => {
      setPost(posts.find(element => element.id === Number(id)))
    }
    if (posts.length) {
      test()
    }
  },[id, posts])
  console.log(post)



  
  return (
    <div>
      <p>one post</p>
      {/* <p>{post.title}</p> */}
      {/* <p>By: {post.user.username}</p> */}
      <MakeComment />
    </div>
  )
}
