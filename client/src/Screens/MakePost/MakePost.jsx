import {useState} from 'react'

export default function MakePost(props) {
  const [formData, setFormData] = useState({
  title: ''
  })
  const {handleMakePost} = props
  
  const {title} = formData

  const handleChange = (e) => {
    const { value } = e.target
    setFormData({ title: value })
  }

  return (
    <div>
      <h2>Create Your Own Post</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleMakePost(formData)
      }}>
          <div>Title:</div>
        <input
          type='text'
          value={title}
          onChange={handleChange}
        />
      <button>Submit</button>
      </form>
    </div>
  )
}
