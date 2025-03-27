import { useNavigate } from 'react-router-dom'
import './Form.css'

export default function Form() {
    const navigate = useNavigate()

    const goToHome = () =>{
        navigate('/')
    }
  return (
    <div className='form-container'>
      <button onClick={goToHome} className='go-back'>Go Back</button>

      <form action="post">
        <label htmlFor="Title">Title</label>
        <input type="text" name="Title" id="title" />
        <br />

        <label htmlFor="Author">Author</label>
        <input type="text" name="Author" id="author" />
        <br />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <br />

        <label htmlFor="url">Cover Image URL</label>
        <input type="url" name="url" id="url" />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}