export default function UserCard({ user }) {
  return (
    <div
      className="flex items-center bg-[#D9D9D9] w-8/12 h-5/12 mt-3 rounded-2xl scale-105"
    >

      <div className="w-34 h-34 border border-[#005CFF] rounded-full ml-6">
        <img src={user.avatar_url} alt="Foto de perfil"
          className="w-full h-full rounded-full"
        />
      </div>

      <div className="ml-6 w-8/12">

        <h1 className="font-semibold text-lg text-[#005CFF] mb-3">{user.name}</h1>

        <p className="font-semibold text-xs">
          {user.bio}
        </p>

      </div>
    </div>
  )
}