import {useState, useEffect} from 'react'
import { useParams } from 'react-router'

export default function EditComment(props) {
  const [formData, setFormData] = useState({
    content: ''
    })
    const {handleMakeComment, posts} = props
  const { content } = formData
  const {id} = useParams

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        content: postItem.content
      })
    }
    if (posts.length){
      prefillFormData()
    }
  },[posts])
  
    const handleChange = (e) => {
      const { value } = e.target
      setFormData({ content: value })
    }


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleMakeComment({ ...formData, post_id:post.id })
      }}>
      <label>
        Edit Comment:
        <input
          type='text'
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
    </div>
  )
}
