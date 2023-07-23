import { useSelector } from 'react-redux'
import { allPlayers } from './playersSlice'

export default function Players() {
  const players = useSelector(allPlayers)
  const date = new Date
  console.log(date);
    
  return (
    <div className='players'>
      {
        players.map(player => {
          return (
            <div key={player.id} className='card'>
              <div className='text'>
                <p>
                  <span>Name</span>
                  {player.name}
                </p>
                <p>
                  <span>Surname</span>
                  {player.surname}
                </p>
                <p>
                  <span>Age</span>
                  {player.age}
                </p>
                <p>
                  <span>Nationality</span>
                  {player.nationality}
                </p>
                <p>
                  <span>Ranking</span>
                  {player.ranking}
                </p>
                <p>
                  <span>Id</span>
                  {player.id}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
