import { useState } from 'react' 
import './App.css'

export default function App() {
  const[username,setusername] = useState([])
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const {username,password} = e.target;
    const user = {
      id:Date.now(),
      username:username.value,
      password:password.value
    }
    setusername([...username,user])
    if(username.includes( e.target[0].value)){
      alert('This item is alredy exist in our list!')
    }else{
      setusername([...username,e.target[0].value]);
    }
    setusername([...username,e.target[0].value]);
    e.target[0].value = '';

  }

  return (
   <div className='header'>
   <form onSubmit={handleSubmit}>
    <label htmlFor='username'>Username</label>
    <input className='input-name' type='text' required placeholder='user name'/>
    <br /><br />
    <label htmlFor='password'>password</label>
    <input className='current-password' type='password' required placeholder='password'/>
    <br /><br />
    <input className='input-submit' type='submit' value='save'/>
   </form>
   </div>
  )
}
 