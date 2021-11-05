import {useState} from 'react'

export default function MakeComment(props) {
  const [formData, setFormData] = useState({
    content: ''
    })
    const {handleMakeComment, post} = props
    
    const {content} = formData
  
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
        Add Comment:
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
