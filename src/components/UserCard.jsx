export default function UserCard() {
  return (
    <div className="flex items-center bg-[#D9D9D9] w-8/12 h-5/12 mt-3 rounded-2xl scale-105">

      <div className="w-34 h-34 bg-amber-300 border border-[#005CFF] rounded-full ml-6">
      </div>

      <div className="ml-6 w-8/12">

        <h1 className="font-semibold text-lg text-[#005CFF] mb-3">Nome do usuário</h1>

        <p className="font-semibold text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat nam repellat sint corporis inventore praesentium, quis eveniet temporibus saepe? Libero consequuntur officia sunt, adipisci totam eveniet ipsum voluptas sit.
        </p>

      </div>
    </div>
  )
}