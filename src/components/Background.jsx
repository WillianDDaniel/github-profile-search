import circleGrid from '../assets/circle-grid.png'

export default function Background({ children }) {
  return (
    <div className="relative w-full h-screen bg-[#1F1F1F] overflow-x-hidden">

      <img src={circleGrid} alt="Circle Grid"
        className="absolute top-5 left-20 w-48 h-48 z-0"
      />

      <div className="radial-blue absolute top-[-50px] right-[-50px] w-[400px] h-[400px]"></div>
      <div className="radial-blue absolute bottom-20 left-[-150px] w-64 h-64"></div>

      {children}

    </div>
  )
}