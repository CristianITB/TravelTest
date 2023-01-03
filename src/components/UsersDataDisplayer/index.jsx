import SingleUserDataDisplayer from '../SingleUserDataDisplayer'
import { Frame } from './styles'

export const UsersDataDisplayer = ({ usersData }) => {
  return (
    <Frame>
      {usersData.map((user, index) => {
        return (
          <SingleUserDataDisplayer key={index} userFirstName={user.name.first} userLastName={user.name.last} userEmail={user.email} userImage={user.picture.medium} />
        )
      })}
    </Frame>
  )
}

export default UsersDataDisplayer
