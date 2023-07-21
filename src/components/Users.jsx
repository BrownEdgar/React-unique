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
    <div className='users'>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} >
          <h1>{user.id}</h1>
          <h2>{user.name}</h2>
          <p><strong>Email: </strong> {user.email}</p>
          <p><strong>Username: </strong> {user.username}</p>
          <p><strong>Address: </strong></p>
          <p><strong>Street: </strong>{user.address.street}</p>
          <p><strong>Suite: </strong>{user.address.suite}</p>
          <p><strong>City: </strong>{user.address.city}</p>
          <p><strong>Zipcode: </strong>{user.address.zipcode}</p>
          <p><strong>Geo: </strong>{user.address.geo.lat}, {user.address.geo.lng}</p>
        </div>
      ))}
    </div>
  );
}
