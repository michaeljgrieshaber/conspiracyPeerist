import { useState, useEffect } from "react"
import { getAllPosts } from '../Services/posts'
import { getAllComments } from '../Services/comments'
import {Switch, Route} from 'react-router-dom'
import Posts from "../Screens/Posts"


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
        
      <Switch>
        <Route path='/posts'>
          <Posts
          posts={posts}
          />
        </Route>
        {/* <Route path='/makePost'></Route> */}

      </Switch>
    </div>
  )
}
