import { useState, useEffect } from "react"
import { getAllPosts } from '../Services/posts'
import {Switch, Route, useHistory} from 'react-router-dom'
import Posts from "../Screens/Posts/Posts"
import MakePost from "../Screens/MakePost/MakePost"
import { createPost } from "../Services/posts"
import OnePost from "../Screens/OnePost/OnePost"


export default function MainContainer() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()


console.log(comments)

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])
  
  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const commentsList = await getAllComments()
  //     setComments(commentsList)
  //   }
  //   fetchComments()
  // }, [])

  const handleMakePost = async (formData) => {
    const newPost = await createPost(formData)
    setPosts(prevState => [...prevState, newPost])
    history.push('/posts')
  }




  return (
    <div>
        
      <Switch>
      <Route path='/posts/:id'>
          <OnePost
            posts={posts}
            
          />
          </Route>
        <Route path='/posts'>
          <Posts
          posts={posts}
          />
        </Route>
        <Route path='/makepost'>
          <MakePost
         
          />
        </Route>


      </Switch>
    </div>
  )
}
