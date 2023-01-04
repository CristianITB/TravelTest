import SingleUserDataDisplayer from '../SingleUserDataDisplayer'
import { Frame, InsertUsers, NumberOfUsers, AddUsersButton } from './styles'
import { useState } from 'react'
import { App } from '../../helpers/api.helper'

const baseURL = 'https://randomuser.me/api?results=5'

export const UsersDataDisplayer = () => {
  const usersDataFromApi = App(baseURL)
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [usersDataListState, setUsersDataListState] = useState([])

  const modifyUsersList = () => {
    if (numberOfUsers < usersDataFromApi.results.length) {
      setNumberOfUsers(numberOfUsers + 1)
      setUsersDataListState([...usersDataListState, usersDataFromApi.results[numberOfUsers]])
    } else if (numberOfUsers === usersDataFromApi.results.length) {
      setNumberOfUsers(0)
      setUsersDataListState([])
    }
  }

  return (
    <Frame>
      <InsertUsers>
        <NumberOfUsers>Number of current users: {numberOfUsers}...Do you want more?</NumberOfUsers>
        <AddUsersButton onClick={modifyUsersList}>Add User</AddUsersButton>
      </InsertUsers>
      {usersDataListState.map((user, index) => {
        return (
          <SingleUserDataDisplayer key={index} userFirstName={user.name.first} userLastName={user.name.last} userEmail={user.email} userImage={user.picture.medium} />
        )
      })}
    </Frame>
  )
}

export default UsersDataDisplayer
