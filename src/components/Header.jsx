import githubLogo from "../assets/github-logo.png"
import githubName from "../assets/github.png"

export default function Header() {
  return (
    <header className="flex items-center md:justify-center md:scale-75 ml-[-25px] md:ml-0 scale-60 mt-6">
      <img src={githubLogo} alt="github logo"
        className="w-14 h-14"
      />

      <div className="flex items-center">

        <span className="text-6xl text-white ml-3">Perfil</span>

        <img src={githubName} alt="github" title="github"
          className="h-11 w-auto ml-3"
        />

      </div>
    </header>
  )
}