import { useDispatch } from 'react-redux';
import { addPlayer } from '../features/players/playersSlice';

export default function MyForm() {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const initialFormData = new FormData(e.target)
    const player = Object.fromEntries(initialFormData.entries())
    dispatch(addPlayer(player))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' name='name' required/>
      <input type="text" placeholder='Surname' name='surname' required/>
      <input type="text" placeholder='Nationality' name='nationality' required/>
      <input type="text" placeholder='Age' name='age' pattern='\d*'/>
      <input type="number" placeholder='Ranking' name='ranking' min={1} max={100}/>
      <input type="submit" value={"Add Tennis Player"} />
    </form>
  )
}
