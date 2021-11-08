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
          <div>Add Comment:</div>
            <input
              type='text'
              value={content}
              onChange={handleChange}
            />
          <button>Submit</button>
      </form>
    </div>
  )
}
