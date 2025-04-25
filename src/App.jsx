import { useState } from "react"

import Background from "./components/Background"
import Container from "./components/Container"
import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import UserCard from "./components/UserCard"
import UserNotFound from "./components/UserNotFound"

export default function App() {

  const [user, setUser] = useState(null)

  async function getUser(userName) {
    const url = `https://api.github.com/users/${userName}`

    try {
      const response = await fetch(url)
      const user = await response.json()

      if (response.ok) {
        return setUser(user)
      }

      setUser(false)
    }
    catch (error) {
      setUser(false)
    }
  }

  return (
    <Background>
      <Container>
        <Header />
        <SearchInput search={getUser} />

        { user && <UserCard user={user} /> }

        { user === false &&  <UserNotFound /> }

      </Container>
    </Background>
  )
}