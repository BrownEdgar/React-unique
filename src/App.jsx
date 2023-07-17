import { useSelector, useDispatch } from "react-redux"
import {addUser} from './feauchers/user/usersSlice';
import Counter from './feauchers/counter/Counter';


export default function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const handleClick = () => {
    const user = {
      id: new Date().getTime(),
      name: "Redux"
    }
    dispatch(addUser(user))
  }
  return (
	<div>
    <h1>HELLO REDUX</h1>
    <pre>
      {
        JSON.stringify(users,null,1)
      }
    </pre>
    <button onClick ={handleClick}>ADD USER</button>
    <Counter />
  </div>
  )
}
