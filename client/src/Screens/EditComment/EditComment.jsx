import {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router'
import { getOneComment, updateComment } from '../../Services/comments'

export default function EditComment(props) {
  const [formData, setFormData] = useState({
    content: ''
    })
  const { content } = formData
  const { id } = useParams()
  const {setToggle} = props
  const history = useHistory()

  

  useEffect(() => {
    const prefillFormData = async () => {
      const oneComment = await getOneComment(id)
      setFormData({
        content: oneComment.content
      })
    }
      prefillFormData()
  },[id])
  
    const handleChange = (e) => {
      const { value } = e.target
      setFormData({ content: value })

    }
  
  const handleSubmit = async ()=> {
    const newComment = await updateComment(id, formData)
    setToggle(prevState => !prevState)
history.push(`/posts/${newComment.post_id}`)
  }


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
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
