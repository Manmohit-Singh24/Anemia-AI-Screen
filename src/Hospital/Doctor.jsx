import { useState } from "react";
import { Eye, X } from "lucide-react";

const Doctor = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Hospital Doctors (10 doctors + anemia-related patients)
    const doctors = [
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
                {
                    id: 102,
                    name: "Poonam Devi",
                    age: 24,
                    status: "3rd Trimester",
                    hemoglobin: "8.8 g/dL",
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
            patients: [
                {
                    id: 201,
                    name: "Neha Singh",
                    age: 29,
                    status: "1st Trimester",
                    hemoglobin: "10.2 g/dL",
                },
            ],
        },
        {
            id: 3,
            name: "Dr. Kavita Rao",
            specialization: "Nutritionist",
            experience: "12 years",
            email: "kavita.rao@hospital.com",
            phone: "+91 9123456780",
            patients: [
                {
                    id: 301,
                    name: "Anjali Mehta",
                    age: 26,
                    status: "2nd Trimester",
                    hemoglobin: "9.0 g/dL",
                },
                {
                    id: 302,
                    name: "Sunita Sharma",
                    age: 30,
                    status: "3rd Trimester",
                    hemoglobin: "8.5 g/dL",
                },
            ],
        },
        {
            id: 4,
            name: "Dr. Meera Sharma",
            specialization: "Obstetrician",
            experience: "15 years",
            email: "meerasharma@hospital.com",
            phone: "+91 9812345678",
            patients: [
                {
                    id: 401,
                    name: "Meera Kumari",
                    age: 28,
                    status: "2nd Trimester",
                    hemoglobin: "7.9 g/dL",
                },
            ],
        },
        {
            id: 5,
            name: "Dr. Sneha Verma",
            specialization: "Obstetrician",
            experience: "10 years",
            email: "sneha.verma@hospital.com",
            phone: "+91 9988001122",
            patients: [
                {
                    id: 501,
                    name: "Ritu Yadav",
                    age: 25,
                    status: "3rd Trimester",
                    hemoglobin: "9.1 g/dL",
                },
                {
                    id: 502,
                    name: "Alka Singh",
                    age: 22,
                    status: "2nd Trimester",
                    hemoglobin: "8.3 g/dL",
                },
            ],
        },
        {
            id: 6,
            name: "Dr. Rajiv Kumar",
            specialization: "General Physician",
            experience: "11 years",
            email: "rajivkumar@hospital.com",
            phone: "+91 9001122334",
            patients: [
                {
                    id: 601,
                    name: "Seema Kumari",
                    age: 31,
                    status: "1st Trimester",
                    hemoglobin: "10.0 g/dL",
                },
            ],
        },
        {
            id: 7,
            name: "Dr. Arjun Singh",
            specialization: "Gynecologist",
            experience: "9 years",
            email: "arjunsingh@hospital.com",
            phone: "+91 9456677889",
            patients: [
                {
                    id: 701,
                    name: "Suman Devi",
                    age: 23,
                    status: "2nd Trimester",
                    hemoglobin: "9.2 g/dL",
                },
                {
                    id: 702,
                    name: "Mamta Kumari",
                    age: 26,
                    status: "3rd Trimester",
                    hemoglobin: "8.7 g/dL",
                },
            ],
        },
        {
            id: 8,
            name: "Dr. Anil Mehta",
            specialization: "Internal Medicine",
            experience: "13 years",
            email: "anil.mehta@hospital.com",
            phone: "+91 9765432100",
            patients: [
                {
                    id: 801,
                    name: "Kavita Singh",
                    age: 28,
                    status: "2nd Trimester",
                    hemoglobin: "9.4 g/dL",
                },
            ],
        },
        {
            id: 9,
            name: "Dr. Ruchi Malhotra",
            specialization: "Obstetrician",
            experience: "7 years",
            email: "ruchi.malhotra@hospital.com",
            phone: "+91 9345678123",
            patients: [
                {
                    id: 901,
                    name: "Shalini Kumari",
                    age: 25,
                    status: "3rd Trimester",
                    hemoglobin: "8.9 g/dL",
                },
                {
                    id: 902,
                    name: "Rashmi Devi",
                    age: 27,
                    status: "2nd Trimester",
                    hemoglobin: "9.0 g/dL",
                },
            ],
        },
        {
            id: 10,
            name: "Dr. Vivek Joshi",
            specialization: "Nutritionist",
            experience: "14 years",
            email: "vivek.joshi@hospital.com",
            phone: "+91 9876001234",
            patients: [
                {
                    id: 1001,
                    name: "Pallavi Kumari",
                    age: 30,
                    status: "1st Trimester",
                    hemoglobin: "10.1 g/dL",
                },
                {
                    id: 1002,
                    name: "Shalini Kumari",
                    age: 25,
                    status: "3rd Trimester",
                    hemoglobin: "8.9 g/dL",
                },
            ],
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white">
            <h2 className="text-2xl font-semibold mb-6">Hospital Doctors</h2>

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
                            <td className="p-3 text-center">
                                <button
                                    className="p-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                                    onClick={() => setSelectedDoctor(doctor)}
                                >
                                    <Eye className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Doctor Modal */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedDoctor(null)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Doctor Info */}
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

                        {/* Patients Under Care */}
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
        </div>
    );
};

export default Doctor;
