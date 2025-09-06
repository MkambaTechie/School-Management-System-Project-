
const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcement</h1>
            <span className="text-xs text-gray-400">View more</span>
        </div>


        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-mkambaLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-10-6</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>

            <div className="bg-mkambaPurple rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-10-6</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>

            <div className="bg-mkambaYellow rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-10-6</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
        </div>
        
    </div>
  )
}

export default Announcement
