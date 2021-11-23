import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import MakeComment from '../MakeComment/MakeComment'
import { deleteComment, makeComment } from "../../Services/comments"
import { Link } from 'react-router-dom'
import './onePost.css'
import { deletePost } from "../../Services/posts"

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

  const handlePostDelete = async (id) => {
    console.log(typeof(id))
    await deletePost(id)
    // setComments((prevState)=> prevState.filter((comment)=>comment.id !== id))
  }




  function verify() {
    if (localStorage.length === 1) {
      return <MakeComment
      post={post}
      handleMakeComment={handleMakeComment}
      />
      } else {
    }
  }

  return (
    <div className='onePostPage'>
      <div className='titleAndName'>
      <div >{post?.title}</div>
        <div>By: {post?.user?.username}</div>
        {post?.user_id === currentUser?.id ?
          <div>
            <button className='deleteButton' onClick={() => handlePostDelete(post.id)}>X</button> 
          </div>
            :
          <div>
          </div>
        }
        </div>
      <div> {comments?.map(comment => (
        <div key={comment.id}>
          <div className='commentContainer'>
            <div className='comment'>
              {comment?.content}
              {`-${comment?.user?.username}`}
              {comment.user_id === currentUser?.id ?
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
          </div>
        ))}
      </div>
      {verify()}
    </div>
  )
}

