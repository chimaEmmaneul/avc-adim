

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a]">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 w-full h-full rounded-full border-8 border-transparent border-t-[#e6a817] border-r-[#e6a817] animate-spin-outer"></div>

        <div className="absolute inset-0 w-16 h-16 m-auto rounded-full border-8 border-transparent border-t-[#e6e6e6] border-r-[#e6e6e6] animate-spin-inner"></div>
      </div>
      <div className="flex justify-center gap-16 mt-24">
        {[0, 90, 180, 270].map((rotation, index) => (
          <div key={index} className="relative w-20 h-20">
            <div
              className="absolute inset-0 w-full h-full rounded-full border-8 border-transparent border-t-[#e6a817] border-r-[#e6a817]"
              style={{ transform: `rotate(${rotation}deg)` }}
            ></div>

            <div
              className="absolute inset-0 w-10 h-10 m-auto rounded-full border-8 border-transparent border-t-[#e6e6e6] border-r-[#e6e6e6]"
              style={{ transform: `rotate(${rotation * 2}deg)` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
