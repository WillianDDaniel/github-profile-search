import searchIcon from '../assets/search-icon.svg';

export default function SearchInput() {
  return (
    <div className="relative w-94 m-6">

      <input type="text" placeholder="Digite um usuário do GitHub"
        className="w-full pr-12 pl-4 h-11 border-1 border-gray-300 font-semibold
          rounded-lg bg-white outline-none focus:border-[#005CFF] focus:ring-1
        "
      />

      <button className="absolute inset-y-0 right-0 px-4 w-13 flex items-center bg-[#005CFF] rounded-lg">
        <img src={searchIcon} alt="Buscar" />
      </button>

    </div>
  )
}
