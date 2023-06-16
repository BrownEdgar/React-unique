
import { useState } from 'react';
import './App.scss';

export default function App() {
    const[users,setusername] = useState([]);

    const[currentUserId,setCurrentUserId] = useState(-1);
    const[mailError,setMailError] = useState(false);
    const[passError,setPassError] = useState(false);
     
    const handleSubmit = (e) => {
      e.preventDefault();
      const {username,password,email} = e.target;
      const isePasswordExists = users.some(user =>user.password
        === password.value);
        if(isePasswordExists){
          setPassError(true);
          setTimeout(() => {
            setPassError(false);
          }, 4000);
        }else if(password.value.length < 8){
          setPassError(true)
          setTimeout(() => {
            setPassError(false)
          },4000);
        }else if(!/^[A-Z]/&&/\d/&&/[^a-z]/.test(password.value)){
          setPassError(true)
          setTimeout(() => {
            setPassError(false)
          },4000);
        }else{
          const user = {
            id:Date.now(),
            username:username.value,
            password:password.value,
            email:email.value
          }
          setusername([...users,user]);
          setMailError(false);
        }
      const iseEmailExists = users.some(user => user.email
        === email.value);
        if(iseEmailExists){
         setMailError(true);
         setTimeout(() => {
          setMailError(false);
         },4000);
        }else{
          const user = {
            id:Date.now(),
            username:username.value,
            password:password.value,
            email:email.value
          }
          setusername([...users,user]);
          setMailError(false);
        };
        e.target.reset();
    };
  
    const setUserId = (id) => {
      (id === currentUserId)
      ? setCurrentUserId(-1)
      : setCurrentUserId(id)
    };

    return (
     <div className='container'>
     <form onSubmit={handleSubmit}>    
    <div>
      <label htmlFor='username'>Username</label>
      <input type='text' required id='username'/>
    </div>
    <div>
      <p className='password-config'><span className='configs'>
        A-Z</span> / <span className='configs'>0-9</span> / <span className='configs'>.$*</span>
      </p>
      <label htmlFor='password'>password</label>
      <input type='password'required id='password'/>
      <p className='error'>{passError ? 'this password is alredy exist!':null}</p>
    </div>
    <div>
      <label htmlFor='email'>Mail</label>
      <input  type='email' required id='email'/>
    <p className='error'>{mailError ? 'this email is alredy exist!':null}</p>
    </div>
    <div>
      <input type='submit' value='save'/>
      </div>
     </form>
     <hr />
     <div className="users">
      <ul className="users-list">
        {
          users.map(user => {
            return(
              <li key ={user.id}>
                <p><span>email:</span>{user.email}</p>
                <p><span>username:</span>{user.username}</p>
                <p className='password-line'><span>password:</span>
                {(currentUserId === user.id) ? user.password : '*'.repeat(Math.min(10,user.password.length))}
                <span>
                  <i 
                  onClick={() => setUserId(user.id)}
                  className={`fa-regular fa-eye${(currentUserId === user.id) ? '-slash' : ''}`}></i>
                </span>
                </p>
              </li>
            )
          })
        }
      </ul>
     </div>
     </div>
    )
  };
   