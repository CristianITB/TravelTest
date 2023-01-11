import { render, screen, fireEvent } from '@testing-library/react'
import SingleUserDataDisplayer from '.'

const mockUserFirstName = 'John'
const mockUserLastName = 'Doe'
const mockUserEmail = 'john.doe@gmail.com'
const mockUserImage = 'https://randomuser.me/api/portraits/med/men/98.jpg'

test('SingleUserDataDisplayer shows the full name correctly', () => {
  render(<SingleUserDataDisplayer userFirstName={mockUserFirstName} userLastName={mockUserLastName} userEmail={mockUserEmail} userImage={mockUserImage} />)
  const fullName = screen.queryAllByText('John Doe')
  expect(fullName.length).toBeGreaterThan(0)
})

test('SingleUserDataDisplayer shows the email correctly', () => {
  render(<SingleUserDataDisplayer userFirstName={mockUserFirstName} userLastName={mockUserLastName} userEmail={mockUserEmail} userImage={mockUserImage} />)
  const email = screen.queryAllByText('john.doe@gmail.com')
  expect(email.length).toBeGreaterThan(0)
})

test('SingleUserDataDisplayer shows the image correctly', () => {
  render(<SingleUserDataDisplayer userFirstName={mockUserFirstName} userLastName={mockUserLastName} userEmail={mockUserEmail} userImage={mockUserImage} />)
  const image = screen.queryAllByAltText('John Doe image')
  expect(image.length).toBeGreaterThan(0)
  fireEvent.load(image[0])
})
