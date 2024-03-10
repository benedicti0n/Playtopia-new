import React from "react"

const Registration = () => {
    return (
        <section className="h-screen w-full bg-white">
            <div className="flex justify-center h-full w-full">
                <div className="hidden bg-cover bg-center lg:block lg:w-2/5" style={{ backgroundImage: 'url("/bgmi.jpg")' }}>
                </div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-3xl font-bold tracking-wider text-gray-800 capitalize ">
                            Register with BGMI
                        </h1>
                        <form className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                                <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Phone number</label>
                                <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Email address</label>
                                <input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Team Name <span className="font-bold">Optional</span></label>
                                <input type="text" placeholder="team name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Select 1 event form:</label>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="bgmi" name="game" value="BGMI" className="hidden" />
                                        <label htmlFor="bgmi" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">BGMI</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="pes" name="game" value="PES" className="hidden" />
                                        <label htmlFor="pes" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">PES</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="valorant" name="game" value="VALORANT" className="hidden" />
                                        <label htmlFor="valorant" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">VALORANT</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600">Select 1 game if u want to participate</label>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="bgmi" name="game" value="BGMI" className="hidden" />
                                        <label htmlFor="bgmi" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">NFS</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="pes" name="game" value="PES" className="hidden" />
                                        <label htmlFor="pes" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">8 BPool</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input type="radio" id="valorant" name="game" value="VALORANT" className="hidden" />
                                        <label htmlFor="valorant" className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-2 cursor-pointer">Carom</label>
                                    </div>
                                </div>
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


export default Registration;