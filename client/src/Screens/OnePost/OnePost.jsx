import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import MakeComment from '../MakeComment/MakeComment'
import { deleteComment, makeComment } from "../../Services/comments"
import { Link } from 'react-router-dom'
import './onePost.css'

export default function OnePost(props) {
  const { posts } = props
  const {currentUser } = props

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
    <div className='onePostPage'>
      <div className='titleAndName'>
      <div >{post?.title}</div>
        <div>By: {post?.user?.username}</div>
        </div>
      <div> {comments?.map(comment => (
        <div key={comment.id}>
          <div className='comment'>
          {comment?.content}
          {`-${comment?.user?.username}`}
          
          {
              comment.user_id === currentUser?.id ?
                <div>
                          <Link to={`/comments/${comment?.id}`}><button className='editButton'>Edit</button></Link>
          <button className='deleteButton' onClick={() => handleCommentDelete(comment.id)}>X</button> 
                </div>
          :
                <div>
                </div>
          }
          </div>
          

        </div>
      ))}
      </div>
      <MakeComment
        post={post}
      handleMakeComment={handleMakeComment}
      />
    </div>
  )
}

