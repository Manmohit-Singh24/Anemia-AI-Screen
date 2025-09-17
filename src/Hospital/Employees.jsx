import { useState } from "react";
import { Eye, X, Trash2, Plus } from "lucide-react";

const Employees = () => {
    const [workers, setWorkers] = useState([
        {
            id: 1,
            firstName: "Anita",
            lastName: "Kumari",
            age: 28,
            phone: "+91 9876543210",
            email: "anita.kumari@gmail.com",
            village: "Village A",
            district: "District X",
            state: "State Y",
            healthCenter: "Primary Health Center 1",
            dateOfJoining: "2022-05-15",
            status: "Active",
            assignedCases: [
                {
                    id: 101,
                    name: "Raviya Kumari",
                    pregnancyStage: "2nd Trimester",
                    hemoglobin: "9.5 g/dL",
                },
            ],
        },
        {
            id: 2,
            firstName: "Sunita",
            lastName: "Devi",
            age: 32,
            phone: "+91 9876543211",
            email: "sunita.devi@gmail.com",
            village: "Village B",
            district: "District X",
            state: "State Y",
            healthCenter: "Primary Health Center 2",
            dateOfJoining: "2021-09-10",
            status: "Active",
            assignedCases: [],
        },
    ]);

    const [selectedWorker, setSelectedWorker] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newWorker, setNewWorker] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phone: "",
        email: "",
        village: "",
        district: "",
        state: "",
        healthCenter: "",
        dateOfJoining: "",
        status: "Active",
        assignedCases: [],
    });

    // Delete worker
    const handleDelete = (id) => {
        setWorkers(workers.filter((w) => w.id !== id));
        setSelectedWorker(null);
    };

    // Add worker
    const handleAdd = (e) => {
        e.preventDefault();
        const workerToAdd = {
            ...newWorker,
            id: Date.now(),
            age: parseInt(newWorker.age),
        };
        setWorkers([...workers, workerToAdd]);
        setShowAddModal(false);
        setNewWorker({
            firstName: "",
            lastName: "",
            age: "",
            phone: "",
            email: "",
            village: "",
            district: "",
            state: "",
            healthCenter: "",
            dateOfJoining: "",
            status: "Active",
            assignedCases: [],
        });
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">ASHA Workers</h2>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    <Plus className="w-4 h-4" /> Add Worker
                </button>
            </div>

            {/* Workers Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-green-100 dark:bg-green-800">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Village</th>
                        <th className="p-3 text-left">Health Center</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map((worker) => (
                        <tr
                            key={worker.id}
                            className="border-b hover:bg-gray-100 dark:hover:bg-slate-800"
                        >
                            <td className="p-3">
                                {worker.firstName} {worker.lastName}
                            </td>
                            <td className="p-3">{worker.village}</td>
                            <td className="p-3">{worker.healthCenter}</td>
                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-white ${
                                        worker.status === "Active" ? "bg-green-500" : "bg-red-500"
                                    }`}
                                >
                                    {worker.status}
                                </span>
                            </td>
                            <td className="p-3 flex gap-2 justify-center">
                                <button
                                    className="p-2 bg-green-600 text-white rounded hover:bg-green-700"
                                    onClick={() => setSelectedWorker(worker)}
                                >
                                    <Eye className="w-4 h-4" />
                                </button>
                                <button
                                    className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    onClick={() => handleDelete(worker.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Worker Modal */}
            {selectedWorker && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedWorker(null)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Worker Info */}
                        <h2 className="text-2xl font-bold mb-2">
                            {selectedWorker.firstName} {selectedWorker.lastName}
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Village: {selectedWorker.village} • Health Center:{" "}
                            {selectedWorker.healthCenter}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedWorker.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {selectedWorker.phone}
                        </p>
                        <p>
                            <strong>Date of Joining:</strong> {selectedWorker.dateOfJoining}
                        </p>

                        {/* Assigned Patients */}
                        <h3 className="text-lg font-semibold mt-4 mb-2">Assigned Pregnant Women</h3>
                        {selectedWorker.assignedCases.length > 0 ? (
                            <table className="w-full border">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-slate-800">
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Pregnancy Stage</th>
                                        <th className="p-2 text-left">Hemoglobin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedWorker.assignedCases.map((p) => (
                                        <tr key={p.id} className="border-b">
                                            <td className="p-2">{p.name}</td>
                                            <td className="p-2">{p.pregnancyStage}</td>
                                            <td className="p-2">{p.hemoglobin}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-500">No patients assigned yet.</p>
                        )}
                    </div>
                </div>
            )}

            {/* Add Worker Modal */}
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

                        <h2 className="text-xl font-bold mb-4">Add New Worker</h2>
                        <form onSubmit={handleAdd} className="space-y-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-2 border rounded"
                                value={newWorker.firstName}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, firstName: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-2 border rounded"
                                value={newWorker.lastName}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, lastName: e.target.value })
                                }
                                required
                            />
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full p-2 border rounded"
                                value={newWorker.age}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, age: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-2 border rounded"
                                value={newWorker.phone}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, phone: e.target.value })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                value={newWorker.email}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, email: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Village"
                                className="w-full p-2 border rounded"
                                value={newWorker.village}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, village: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="District"
                                className="w-full p-2 border rounded"
                                value={newWorker.district}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, district: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className="w-full p-2 border rounded"
                                value={newWorker.state}
                                onChange={(e) =>
                                    setNewWorker({ ...newWorker, state: e.target.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Health Center"
                                className="w-full p-2 border rounded"
                                value={newWorker.healthCenter}
                                onChange={(e) =>
                                    setNewWorker({
                                        ...newWorker,
                                        healthCenter: e.target.value,
                                    })
                                }
                                required
                            />
                            

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                            >
                                Save Worker
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Employees;
