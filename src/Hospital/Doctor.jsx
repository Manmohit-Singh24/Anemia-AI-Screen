import { useState } from "react";
import { Eye, X, Plus, Trash2 } from "lucide-react";

const Doctor = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // Doctors stored in state
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: "Dr. Aditi Sharma",
            specialization: "Obstetrician & Gynecologist",
            experience: "12+ years",
            email: "aditi.sharma@hospital.com",
            phone: "+91 9876543210",
            patients: [
                {
                    id: 101,
                    name: "Raviya Kumari",
                    age: 27,
                    status: "2nd Trimester",
                    hemoglobin: "9.5 g/dL",
                },
            ],
        },
        {
            id: 2,
            name: "Dr. Manish Gupta",
            specialization: "General Physician",
            experience: "8 years",
            email: "manish.gupta@hospital.com",
            phone: "+91 9988776655",
            patients: [],
        },
    ]);

    // New Doctor form state
    const [newDoctor, setNewDoctor] = useState({
        name: "",
        specialization: "",
        experience: "",
        email: "",
        phone: "",
    });

    // Add doctor handler
    const handleAddDoctor = (e) => {
        e.preventDefault();
        if (!newDoctor.name || !newDoctor.specialization) return;

        const doctorToAdd = {
            id: Date.now(),
            ...newDoctor,
            patients: [],
        };

        setDoctors([...doctors, doctorToAdd]);
        setNewDoctor({
            name: "",
            specialization: "",
            experience: "",
            email: "",
            phone: "",
        });
        setShowAddForm(false);
    };

    // Delete doctor handler
    const handleDeleteDoctor = (id) => {
        setDoctors(doctors.filter((d) => d.id !== id));
        if (selectedDoctor && selectedDoctor.id === id) {
            setSelectedDoctor(null);
        }
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Hospital Doctors</h2>
                <button
                    className="flex items-center gap-2 px-3 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                    onClick={() => setShowAddForm(true)}
                >
                    <Plus className="w-4 h-4" /> Add Doctor
                </button>
            </div>

            {/* Doctors Table */}
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-rose-100 dark:bg-rose-800">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Specialization</th>
                        <th className="p-3 text-left">Experience</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr
                            key={doctor.id}
                            className="border-b hover:bg-gray-100 dark:hover:bg-slate-800"
                        >
                            <td className="p-3">{doctor.name}</td>
                            <td className="p-3">{doctor.specialization}</td>
                            <td className="p-3">{doctor.experience}</td>
                            <td className="p-3 text-center flex gap-2 justify-center">
                                <button
                                    className="p-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                                    onClick={() => setSelectedDoctor(doctor)}
                                >
                                    <Eye className="w-4 h-4" />
                                </button>
                                <button
                                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDeleteDoctor(doctor.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Doctor Details Modal */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedDoctor(null)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {selectedDoctor.specialization} • {selectedDoctor.experience}
                        </p>

                        <div className="mb-4">
                            <p>
                                <strong>Email:</strong> {selectedDoctor.email}
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedDoctor.phone}
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold mt-4 mb-2">
                            Pregnant Ladies (Anemia Cases)
                        </h3>
                        {selectedDoctor.patients.length > 0 ? (
                            <table className="w-full border">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-slate-800">
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Age</th>
                                        <th className="p-2 text-left">Pregnancy Stage</th>
                                        <th className="p-2 text-left">Hemoglobin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedDoctor.patients.map((p) => (
                                        <tr key={p.id} className="border-b">
                                            <td className="p-2">{p.name}</td>
                                            <td className="p-2">{p.age}</td>
                                            <td className="p-2">{p.status}</td>
                                            <td className="p-2">{p.hemoglobin}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-500">No anemia cases assigned yet.</p>
                        )}
                    </div>
                </div>
            )}

            {/* Add Doctor Modal */}
            {showAddForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-md relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowAddForm(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Add New Doctor</h2>
                        <form onSubmit={handleAddDoctor} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border rounded"
                                value={newDoctor.name}
                                onChange={(e) =>
                                    setNewDoctor({ ...newDoctor, name: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Specialization"
                                className="w-full p-2 border rounded"
                                value={newDoctor.specialization}
                                onChange={(e) =>
                                    setNewDoctor({ ...newDoctor, specialization: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Experience"
                                className="w-full p-2 border rounded"
                                value={newDoctor.experience}
                                onChange={(e) =>
                                    setNewDoctor({ ...newDoctor, experience: e.target.value })
                                }
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                value={newDoctor.email}
                                onChange={(e) =>
                                    setNewDoctor({ ...newDoctor, email: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-2 border rounded"
                                value={newDoctor.phone}
                                onChange={(e) =>
                                    setNewDoctor({ ...newDoctor, phone: e.target.value })
                                }
                            />
                            <button
                                type="submit"
                                className="w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700"
                            >
                                Add Doctor
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doctor;
