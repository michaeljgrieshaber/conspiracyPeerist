import { useState, useEffect } from "react"

export default function MainContainer() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fatchPosts = async () => {
      
    }
  })

  return (
    <div>
      <h2>main container</h2>
    </div>
  )
}
