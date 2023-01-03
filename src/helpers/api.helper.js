import axios from 'axios'
import React from 'react'

const baseURL = 'https://randomuser.me/api'

export let apiData = []

export function App () {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [])

  if (!post) return null

  apiData = post.results[0]

  return (
    <></>
    /*
    <div>
      <h1>{post.results[0].name.first} {post.results[0].name.last}</h1>
      <p>{post.results[0].email}</p>
    </div>
    */
  )
}
