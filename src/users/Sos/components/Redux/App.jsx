import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function App() {
  const users =  useSelector(state => state.users)
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const handleCklik = () => {
    const user = {
        id:new Date().getTime(),
        nume:"redux"
    }
    Dispatch(addUser(user))
  }
  return (
    <div>
        <h1>Hello Redux</h1>
        <pre>
            {
                JSON.stringify(users,null,1)
            }
        </pre>
        <button onClick={handleCklik}>add user</button>
    </div>
  )
}
