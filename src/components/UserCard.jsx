export default function UserCard({ user }) {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start
      bg-[#D9D9D9] md:w-8/12 w-10/12 md:h-5/12 h-auto mt-3 rounded-2xl scale-105 pb-3 md:pb-0"
    >

      <div className="w-34 h-34 border border-[#005CFF] rounded-full md:ml-6 md:mt-0 mt-3">
        <img src={user.avatar_url} alt="Foto de perfil"
          className="w-full h-full rounded-full"
        />
      </div>

      <div className="md:ml-6 md:w-8/12 px-1.5 md:px-0 text-center md:text-left">

        <h1 className="font-semibold text-lg text-[#005CFF] mb-3">{user.name}</h1>

        <p className="font-semibold text-xs px-2 md:px-0">
          {user.bio}
        </p>

      </div>
    </div>
  )
}