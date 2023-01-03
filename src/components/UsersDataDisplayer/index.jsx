import SingleUserDataDisplayer from '../SingleUserDataDisplayer'
import { Frame, InsertUsers, NumberOfUsers, AddUsersButton } from './styles'
import { useState } from 'react'
import { apiData } from '../../helpers/api.helper'

export const UsersDataDisplayer = ({ usersData }) => {
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [usersDataListState, setUsersDataListState] = useState([])

  const modifyUsersList = () => {
    if (numberOfUsers < usersData.length) {
      setNumberOfUsers(numberOfUsers + 1)
      usersDataListState.push(usersData[numberOfUsers])
      setUsersDataListState(usersDataListState)
    } else if (numberOfUsers === usersData.length) {
      setNumberOfUsers(0)
      setUsersDataListState([])
    }
  }

  return (
    <Frame>

      {/*
      {apiData.map((user, index) => {
        return (
          <SingleUserDataDisplayer
            key={index}
            userFirstName={user.results[index].name.first}
            userLastName={user.results[index].name.last}
            userEmail={user.results[index].email}
            userImage={user.results[index].picture.medium}
          />
        )
      })}
    */}

      <div>
        <h1>{apiData.name.first} {apiData.name.last}</h1>
        <p>{apiData.email}</p>
      </div>
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
