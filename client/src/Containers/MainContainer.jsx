import { useState, useEffect } from "react"
import { getAllPosts } from '../Services/posts'
import { getAllComments } from '../Services/comments'
import {Switch, Route, useHistory, useParams} from 'react-router-dom'
import Posts from "../Screens/Posts/Posts"
import MakePost from "../Screens/MakePost/MakePost"
import { createPost, getOnePost } from "../Services/posts"
import OnePost from "../Screens/OnePost/OnePost"


export default function MainContainer() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const history = useHistory()
  const { id } = useParams();

  // console.log(comments)

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
  }, [])

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(20);
      setPost(post);
    };
    fetchPost();
  }, [id]);
  
  const handleMakePost = async (formData) => {
    const newPost = await createPost(formData)
    setPosts(prevState => [...prevState, newPost])
    history.push('/posts')
  }

  return (
    <div>
        
      <Switch>
      <Route path={`/posts/${id}`}>
          <OnePost
            post={post}/>
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


      </Switch>
    </div>
  )
}
