import './App.css'
import { getUsersData } from '../../resources/dataSamples/usersData'
import UsersDataDisplayer from '../UsersDataDisplayer'

function App () {
  return (
    <div className='Frame'>
      <UsersDataDisplayer usersData={getUsersData()} />
    </div>
  )
}

export default App
