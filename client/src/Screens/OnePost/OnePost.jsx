import {useParams, useEffect} from 'react-router-dom'


export default function OnePost(props) {
  const { posts } = props
  const { id } = useParams();
  
 

  const post = posts.find(element => element.id === Number(id))


  return (
    <div>
      <p>one post</p>
      <p>{post.title}</p>
    </div>
  )
}
