import {useState} from 'react'

export default function MakeComment(props) {
  const [formData, setFormData] = useState({
    content: ''
    })
    const {handleMakePost} = props
    
    const {content} = formData
  
    const handleChange = (e) => {
      const { value } = e.target
      setFormData({ content: value })
    }


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleMakePost(formData)
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
