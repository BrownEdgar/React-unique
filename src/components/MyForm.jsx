import { useDispatch } from 'react-redux';
import { addFilm } from '../feauchers/test/testSlise';
export default function MyForm() {
const dispatch = useDispatch()


const handleSubmit = (e) => { 
    e.preventDefault();
    const initialFormData = new FormData(e.target)
    const film = Object.fromEntries(initialFormData.entries())
    
    dispatch(addFilm(film))

}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' name='title' required/>
        <input type="text" placeholder='year' pattern='\d*' name='year' required/>
        <input type="number" placeholder='rating' name='rating' required/>
        <input type="submit" value={"Add film"}/>
    </form>
  )
}
