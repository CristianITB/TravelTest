import { Frame, UserInfo, UserImage, UserName, UserEmail } from './styles'

export const SingleUserDataDisplayer = ({ userFirstName, userLastName, userEmail, userImage }) => {
  return (
    <Frame>
      <UserImage src={userImage} alt='user profile' />
      <UserInfo>
        <UserName>{userFirstName} {userLastName}</UserName>
        <UserEmail>{userEmail}</UserEmail>
      </UserInfo>
    </Frame>
  )
}

export default SingleUserDataDisplayer
