import { useState, useEffect } from "react"
import { getAllPosts } from '../Services/posts'
import { getAllComments } from '../Services/comments'


export default function MainContainer() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])
  
  useEffect(() => {
    const fetchComments = async () => {
      const commentsList = await getAllComments()
      setComments(commentsList)
    }
    fetchComments()
  },[])

  return (
    <div>
      <h2>main container</h2>
    </div>
  )
}
