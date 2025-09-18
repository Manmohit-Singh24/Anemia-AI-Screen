import { useState } from "react";
import { Eye, X, Trash2, Plus } from "lucide-react";

const Hospitals = () => {
    const [hospitals, setHospitals] = useState(initState);

    const [selectedHospital, setSelectedHospital] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newHospital, setNewHospital] = useState({
        name: "",
        type: "",
        phone: "",
        email: "",
        address: "",
        dateOfRegistration: "",
        status: "Active",
        capacity: "",
    });

    // Remove hospital
    const handleRemove = (id) => {
        setHospitals(hospitals.filter((h) => h.id !== id));
        setSelectedHospital(null);
    };

    // Add hospital
    const handleAdd = (e) => {
        e.preventDefault();
        const hospitalToAdd = {
            ...newHospital,
            id: Date.now(),
        };
        setHospitals([...hospitals, hospitalToAdd]);
        setShowAddModal(false);
        setNewHospital({
            name: "",
            type: "",
            phone: "",
            email: "",
            address: "",
            dateOfRegistration: "",
            status: "Active",
            capacity: "",
        });
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Registered Hospitals</h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    <Plus className="w-4 h-4" /> Add Hospital
                </button>
            </div>

            {/* Hospitals Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-blue-100 dark:bg-blue-800">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Type</th>
                        <th className="p-3 text-left">Capacity</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {hospitals.map((hospital) => (
                        <tr
                            key={hospital.id}
                            className="border-b hover:bg-gray-100 dark:hover:bg-slate-800"
                        >
                            <td className="p-3">{hospital.name}</td>
                            <td className="p-3">{hospital.type}</td>
                            <td className="p-3">{hospital.capacity}</td>
                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-white ${
                                        hospital.status === "Active" ? "bg-green-500" : "bg-red-500"
                                    }`}
                                >
                                    {hospital.status}
                                </span>
                            </td>
                            <td className="p-3 text-center flex gap-2 justify-center">
                                <button
                                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={() => setSelectedHospital(hospital)}
                                >
                                    <Eye className="w-4 h-4" />
                                </button>
                                <button
                                    className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    onClick={() => handleRemove(hospital.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Hospital Modal */}
            {selectedHospital && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedHospital(null)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Hospital Info */}
                        <h2 className="text-2xl font-bold mb-2">{selectedHospital.name}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Type: {selectedHospital.type}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedHospital.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {selectedHospital.phone}
                        </p>
                        <p>
                            <strong>Address:</strong> {selectedHospital.address}
                        </p>
                        <p>
                            <strong>Date of Registration:</strong>{" "}
                            {selectedHospital.dateOfRegistration}
                        </p>
                        <p>
                            <strong>Capacity:</strong> {selectedHospital.capacity} beds
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedHospital.status}
                        </p>
                    </div>
                </div>
            )}

            {/* Add Hospital Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-lg relative">
                        {/* Close */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowAddModal(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold mb-4">Add New Hospital</h2>
                        <form onSubmit={handleAdd} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Hospital Name"
                                className="w-full p-2 border rounded"
                                value={newHospital.name}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, name: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Hospital Type"
                                className="w-full p-2 border rounded"
                                value={newHospital.type}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, type: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-2 border rounded"
                                value={newHospital.phone}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, phone: e.target.value })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                value={newHospital.email}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, email: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full p-2 border rounded"
                                value={newHospital.address}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, address: e.target.value })
                                }
                                required
                            />
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={newHospital.dateOfRegistration}
                                onChange={(e) =>
                                    setNewHospital({
                                        ...newHospital,
                                        dateOfRegistration: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="number"
                                placeholder="Capacity (beds)"
                                className="w-full p-2 border rounded"
                                value={newHospital.capacity}
                                onChange={(e) =>
                                    setNewHospital({ ...newHospital, capacity: e.target.value })
                                }
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                            >
                                Save Hospital
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hospitals;

const initState = [
    {
        id: 1,
        name: "District Hospital X",
        type: "District Hospital",
        phone: "+91 9876500001",
        email: "districtx@hospital.com",
        address: "Main Road, District X, State Y",
        dateOfRegistration: "2020-05-10",
        status: "Active",
        capacity: 120,
    },
    {
        id: 2,
        name: "Community Health Center A",
        type: "Community Health Center",
        phone: "+91 9876500002",
        email: "chcA@hospital.com",
        address: "Village A, District X, State Y",
        dateOfRegistration: "2021-03-22",
        status: "Active",
        capacity: 60,
    },
    {
        id: 3,
        name: "Primary Health Center B",
        type: "Primary Health Center",
        phone: "+91 9876500003",
        email: "phcB@hospital.com",
        address: "Block B, District Y, State Z",
        dateOfRegistration: "2019-11-15",
        status: "Active",
        capacity: 30,
    },
    {
        id: 4,
        name: "Sub-Health Center C",
        type: "Sub-Health Center",
        phone: "+91 9876500004",
        email: "shcC@hospital.com",
        address: "Village C, Block D, District Y, State Z",
        dateOfRegistration: "2022-01-08",
        status: "Active",
        capacity: 15,
    },
    {
        id: 5,
        name: "District Hospital Y",
        type: "District Hospital",
        phone: "+91 9876500005",
        email: "districty@hospital.com",
        address: "Civil Lines, District Y, State Z",
        dateOfRegistration: "2018-07-19",
        status: "Active",
        capacity: 150,
    },
    {
        id: 6,
        name: "Community Health Center D",
        type: "Community Health Center",
        phone: "+91 9876500006",
        email: "chcD@hospital.com",
        address: "Village D, District Z, State Y",
        dateOfRegistration: "2021-12-02",
        status: "Inactive",
        capacity: 50,
    },
    {
        id: 7,
        name: "Primary Health Center E",
        type: "Primary Health Center",
        phone: "+91 9876500007",
        email: "phcE@hospital.com",
        address: "Block E, District Z, State Y",
        dateOfRegistration: "2020-09-30",
        status: "Active",
        capacity: 25,
    },
    {
        id: 8,
        name: "Sub-Health Center F",
        type: "Sub-Health Center",
        phone: "+91 9876500008",
        email: "shcF@hospital.com",
        address: "Village F, Block G, District W, State X",
        dateOfRegistration: "2022-06-14",
        status: "Active",
        capacity: 10,
    },
    {
        id: 9,
        name: "Community Health Center G",
        type: "Community Health Center",
        phone: "+91 9876500009",
        email: "chcG@hospital.com",
        address: "Village G, District W, State X",
        dateOfRegistration: "2019-04-25",
        status: "Active",
        capacity: 70,
    },
    {
        id: 10,
        name: "District Hospital Z",
        type: "District Hospital",
        phone: "+91 9876500010",
        email: "districtz@hospital.com",
        address: "Station Road, District Z, State W",
        dateOfRegistration: "2017-02-12",
        status: "Active",
        capacity: 200,
    },
];
