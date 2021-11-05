import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import MakeComment from '../MakeComment/MakeComment'
import { makeComment } from "../../Services/comments"


export default function OnePost(props) {
  const { posts } = props
  const { id } = useParams();
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)


  
  console.log(posts.length)
  
  useEffect(() => {
    const test = () => {
      const singlePost = posts.find(element => element.id === Number(id))
      setPost(singlePost)
      setComments(singlePost?.comments)
    }
    if (posts.length) {
      test()
    }
  }, [id, posts])
  
  console.log(post)

  const handleMakeComment = async (formData) => {
    const newComment = await makeComment(formData)
    setComments(prevState => [...prevState, newComment])
  }


  
  return (
    <div>
      <p>one post</p>
      <p>{post?.title}</p>
      <p>By: {post?.user.username}</p>
      <p> {comments?.map(comment => (
        <p>{comment.content}</p>
      ))}
      <button>edit</button><button>delete</button></p>
      <MakeComment
        post={post}
      handleMakeComment={handleMakeComment}
      />
    </div>
  )
}
