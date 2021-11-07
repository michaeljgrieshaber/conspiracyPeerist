import { useState, useEffect } from "react"
import { getAllPosts } from '../Services/posts'
import {Switch, Route, useHistory} from 'react-router-dom'
import Posts from "../Screens/Posts/Posts"
import MakePost from "../Screens/MakePost/MakePost"
import { createPost } from "../Services/posts"
import OnePost from "../Screens/OnePost/OnePost"
import EditComment from "../Screens/EditComment/EditComment"
import Landing from '../Screens/Landing/Landing'


export default function MainContainer(props) {
  const {currentUser} = props
  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [toggle])
  
  const handleMakePost = async (formData) => {
    const newPost = await createPost(formData)
    setPosts(prevState => [...prevState, newPost])
    history.push('/posts')
  }




  return (
    <div>
        
      <Switch>

      <Route path='/comments/:id'>
          <EditComment
          setToggle={setToggle}
          />
        </Route>
        
      <Route path='/posts/:id'>
          <OnePost
            posts={posts}
            currentUser={currentUser}
          />
          </Route>
        <Route path='/posts'>
          <Posts
          posts={posts}
          />
        </Route>
        <Route path='/makepost'>
          <MakePost
            handleMakePost={handleMakePost}
          />
        </Route>
        <Route path='/'>
          <Landing />
          </Route>


      </Switch>
    </div>
  )
}
