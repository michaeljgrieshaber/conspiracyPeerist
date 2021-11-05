import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import MakeComment from '../MakeComment/MakeComment'
import { deleteComment, makeComment } from "../../Services/comments"

export default function OnePost(props) {
  const { posts } = props
  const { id } = useParams();
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)

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
  

  const handleMakeComment = async (formData) => {
    const newComment = await makeComment(formData)
    setComments(prevState => [...prevState, newComment])
  }

  const handleCommentDelete = async (id) => {
    await deleteComment(id)
    setComments((prevState)=> prevState.filter((comment)=>comment.id !== id))
  }
  
  return (
    <div>
      <p>{post?.title}</p>
      <p>By: {post?.user.username}</p>
      <p> {comments?.map(comment => (
        <p>{comment.content}<button>Edit</button><button onClick={()=> handleCommentDelete(comment.id)}>Delete</button></p>
      ))}
      </p>
      <MakeComment
        post={post}
      handleMakeComment={handleMakeComment}
      />
    </div>
  )
}
