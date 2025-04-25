export default function Container({ children }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="flex flex-col items-center md:w-[80%] md:h-[65%] bg-black z-1
          w-11/12 h-11/12
        "
      >
        {children}
      </div>
    </div>
  )
}