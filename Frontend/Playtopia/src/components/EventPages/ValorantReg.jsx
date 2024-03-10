import React from "react"

const ValorantReg = () => {
    return (
        <section className="h-screen w-full bg-gray-800">
            <div className="flex justify-center h-full w-full">
                <div className="hidden bg-cover bg-top lg:block lg:w-2/5" style={{ backgroundImage: 'url("/EventBg/Phone/phnBg1.jpg")' }}>
                </div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full ">
                        <h1 className="text-3xl xs:text-xl font-bold tracking-wider text-white capitalize text-center">
                            Register with Valorant
                        </h1>
                        <form className="grid grid-cols-2 gap-5 xs:gap-1 sm:gap-3 mt-8 xs:mt-5 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Team Leader Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Team Name </label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Whatsapp number</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Email address</label>
                                <input type="email" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Team Leader Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            
                            
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 2 Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 2 Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 3 Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 3 Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 4 Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 4 Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 5 Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 5 Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 6 Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Player 6 Riot ID</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            
                            <button className="flex items-center justify-center w-full px-5 py-3 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff4655] rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                <span className=" font-semibold">Register Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ValorantReg;