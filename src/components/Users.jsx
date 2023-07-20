import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../feauchers/user/usersSlice1';
export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('users:', users);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
}
