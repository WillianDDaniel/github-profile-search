import Background from "./components/Background"
import Container from "./components/Container"
import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import UserCard from "./components/UserCard"

export default function App() {
  return (
    <Background>
      <Container>
        <Header />
        <SearchInput />
        <UserCard />
      </Container>
    </Background>
  )
}