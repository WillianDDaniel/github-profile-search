export default function Container({ children }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center w-[80%] h-[65%] bg-black z-1">
        {children}
      </div>
    </div>
  )
}