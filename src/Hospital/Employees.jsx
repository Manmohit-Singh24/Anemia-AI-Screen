import { useState } from "react";
import { Eye, X } from "lucide-react";

const Employees = () => {
    const [selectedWorker, setSelectedWorker] = useState(null);
    const workers = [
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
                {
                    id: 102,
                    name: "Poonam Devi",
                    pregnancyStage: "3rd Trimester",
                    hemoglobin: "8.8 g/dL",
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
            assignedCases: [
                {
                    id: 201,
                    name: "Neha Singh",
                    pregnancyStage: "1st Trimester",
                    hemoglobin: "10.2 g/dL",
                },
            ],
        },
        {
            id: 3,
            firstName: "Rekha",
            lastName: "Sharma",
            age: 30,
            phone: "+91 9876543212",
            email: "rekha.sharma@gmail.com",
            village: "Village C",
            district: "District Y",
            state: "State Y",
            healthCenter: "Primary Health Center 3",
            dateOfJoining: "2020-07-20",
            status: "Active",
            assignedCases: [
                {
                    id: 301,
                    name: "Anjali Mehta",
                    pregnancyStage: "2nd Trimester",
                    hemoglobin: "9.0 g/dL",
                },
            ],
        },
        {
            id: 4,
            firstName: "Meena",
            lastName: "Verma",
            age: 29,
            phone: "+91 9876543213",
            email: "meena.verma@gmail.com",
            village: "Village D",
            district: "District Y",
            state: "State Y",
            healthCenter: "Primary Health Center 4",
            dateOfJoining: "2019-11-05",
            status: "Active",
            assignedCases: [
                {
                    id: 401,
                    name: "Sunita Singh",
                    pregnancyStage: "3rd Trimester",
                    hemoglobin: "8.7 g/dL",
                },
                {
                    id: 402,
                    name: "Pallavi Kumari",
                    pregnancyStage: "2nd Trimester",
                    hemoglobin: "9.1 g/dL",
                },
            ],
        },
        {
            id: 5,
            firstName: "Radha",
            lastName: "Devi",
            age: 31,
            phone: "+91 9876543214",
            email: "radha.devi@gmail.com",
            village: "Village E",
            district: "District Z",
            state: "State Y",
            healthCenter: "Primary Health Center 5",
            dateOfJoining: "2021-03-12",
            status: "Active",
            assignedCases: [
                {
                    id: 501,
                    name: "Alka Singh",
                    pregnancyStage: "1st Trimester",
                    hemoglobin: "10.0 g/dL",
                },
            ],
        },
        {
            id: 6,
            firstName: "Sita",
            lastName: "Kumari",
            age: 27,
            phone: "+91 9876543215",
            email: "sita.kumari@gmail.com",
            village: "Village F",
            district: "District Z",
            state: "State Y",
            healthCenter: "Primary Health Center 6",
            dateOfJoining: "2022-01-18",
            status: "Active",
            assignedCases: [
                {
                    id: 601,
                    name: "Ritu Yadav",
                    pregnancyStage: "2nd Trimester",
                    hemoglobin: "9.2 g/dL",
                },
            ],
        },
        {
            id: 7,
            firstName: "Kavita",
            lastName: "Sharma",
            age: 33,
            phone: "+91 9876543216",
            email: "kavita.sharma@gmail.com",
            village: "Village G",
            district: "District X",
            state: "State Y",
            healthCenter: "Primary Health Center 7",
            dateOfJoining: "2018-08-25",
            status: "Active",
            assignedCases: [
                {
                    id: 701,
                    name: "Suman Devi",
                    pregnancyStage: "3rd Trimester",
                    hemoglobin: "8.5 g/dL",
                },
            ],
        },
        {
            id: 8,
            firstName: "Priya",
            lastName: "Devi",
            age: 29,
            phone: "+91 9876543217",
            email: "priya.devi@gmail.com",
            village: "Village H",
            district: "District Y",
            state: "State Y",
            healthCenter: "Primary Health Center 8",
            dateOfJoining: "2020-12-01",
            status: "Active",
            assignedCases: [
                {
                    id: 801,
                    name: "Shalini Kumari",
                    pregnancyStage: "2nd Trimester",
                    hemoglobin: "9.4 g/dL",
                },
                {
                    id: 802,
                    name: "Mamta Devi",
                    pregnancyStage: "3rd Trimester",
                    hemoglobin: "8.6 g/dL",
                },
            ],
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
            <h2 className="text-2xl font-semibold mb-6">ASHA Workers</h2>

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
                            <td className="p-3 text-center">
                                <button
                                    className="p-2 bg-green-600 text-white rounded hover:bg-green-700"
                                    onClick={() => setSelectedWorker(worker)}
                                >
                                    <Eye className="w-4 h-4" />
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
        </div>
    );
};

export default Employees;
