import { MoveLeft, MoveRight, Trash } from "lucide-react";
import { useState } from "react";

export const FourPlayer = () => {
    const [users, setUsers] = useState([
        { name: "Amelia Anderson", email: "ameliaanderson@example.com", Activation: "Logged in", role: "Rockstar Legend", teams: ["Player 1", "Player 2", "Player 3", "Player 4"], event_names: ["BGMI", "Valo"], enrolled_event: 2 },
        { name: "John Doe", email: "johndoe@example.com", Activation: "Logged in", role: "Dummy God", teams: ["Player 1", "Player 2", "Player 3"], event_names: ["BGMI", "Valo"], enrolled_event: 2 },
        { name: "John Doe", email: "johndoe@example.com", Activation: "Logged in", role: "Mortals", teams: ["Player 1", "Player 2", "Player 3", "Player 4"], event_names: ["BGMI", "Valo"], enrolled_event: 1 },
        { name: "John Doe", email: "johndoe@example.com", Activation: "Logged in", role: "User Choice", teams: ["Player 1", "Player 2"], event_names: ["BGMI", "Valo"], enrolled_event: 1 },
        { name: "John Doe", email: "johndoe@example.com", Activation: "Logged in", role: "User Choice", teams: ["Player 1", "Player 2", "Player 3"], event_names: ["BGMI", "Valo"], enrolled_event: 2 },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Logic to calculate pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Function to handle pagination navigation
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to handle user deletion
    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(indexOfFirstUser + index, 1); // Remove user at specified index
        setUsers(updatedUsers);
    };

    return (
        <section className="container px-4 mt-24 mx-auto heading">
            <div className="flex mt-4 items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">4 Players Event</h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{users.length}</span>
            </div>
            <div className="flex flex-col mt-6">
                <div className="overflow-x-auto">
                    {/* Table for displaying users */}
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Table header */}
                        <thead className="bg-gray-50">
                            <tr>
                                {/* Table header cells */}
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Name</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <span>Activation</span>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <span>Team Name</span>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Enrolled Event</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Events name</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Team Members</th>
                                <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Map through current users */}
                            {currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                                <div>
                                                    <h2 className="font-medium text-gray-800">{user.name}</h2>
                                                    <p className="text-sm font-normal text-gray-600">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <h2 className="text-sm font-normal text-emerald-500">{user.Activation}</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{user.role}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{user.enrolled_event}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                        {/* Display event names */}
                                        {user.event_names.map((eventName, index) => (
                                            <span key={index} className="inline-block px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-md mr-1">{eventName}</span>
                                        ))}
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center">
                                            {/* Map through teams */}
                                            {user.teams.map((team, index) => (
                                                <span key={index} className="inline-block px-2 py-1 text-xs font-semibold text-gray-800  mr-1">{team}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button onClick={() => deleteUser(index)} className="text-gray-500 transition-colors duration-200 hover:text-indigo-700 focus:outline-none">
                                                <Trash className="w-5 h-5" />
                                            </button>

                                            {/* If edit button is needed then uncomment it */}
                                            <div>
                                                <button className="text-gray-500 transition-colors duration-200 hover:text-indigo-700 focus:outline-none">
                                                    {/* <FilePenLine className="w-5 h-5" /> */}
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-between mt-6">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <MoveLeft className="w-5 h-5 rtl:-scale-x-100" />
                    <span>Previous</span>
                </button>
                {/* Page numbers */}
                <div className="items-center hidden lg:flex gap-x-3">
                    {/* Map through total number of pages */}
                    {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)} className={`px-2 py-1 text-sm rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{i + 1}</button>
                    ))}
                </div>
                <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= users.length} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>Next</span>
                    <MoveRight className="w-5 h-5 rtl:-scale-x-100" />
                </button>
            </div>
        </section>
    );
};
