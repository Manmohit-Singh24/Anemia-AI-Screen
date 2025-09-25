import { useState, useEffect } from "react";
import { mockData } from "../../utils/mockdata";
import { Search, Send, Loader2, Check, Eye, X } from "lucide-react";

import { ReferralTimeline } from "../AshaWorker/Referrals";
const Patient = () => {
    const [villageFilter, setVillageFilter] = useState("All Villages");
    const [search, setSearch] = useState("");
    const villages = Object.keys(mockData.villages);
    const [showAddModal, setShowAddModal] = useState(false);
    const [allPatients, setAllPatients] = useState(mockData.patients);
    const [newPatient, setNewPatient] = useState({
        name: "",
        pregnancy: "",
        risk: "",
        village: "",
        phone: "",
        status: "Active",
        referredOn: "",
        referralStatus: "Pending",
        eye: "",
        tongue: "",
        nailImage: "",
        age: "",
    });

    const handleImageChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewPatient((prev) => ({ ...prev, [field]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };
    const handleAdd = (e) => {
        e.preventDefault();
        const patientToAdd = {
            ...newPatient,
            pregnancy: newPatient.pregnancy + "Months",
            id: Date.now(),
        };

        setAllPatients([...allPatients, patientToAdd]);
        setShowAddModal(false);
        setNewPatient({
            name: "",
            pregnancy: "",
            risk: "",
            village: "",
            phone: "",
            status: "Active",
            referredOn: "",
            referralStatus: "Pending",
            eye: "",
            tongue: "",
            nailImage: "",
            age: "",
        });
    };

    const closeModal = () => {
        setShowAddModal(false);
        setNewPatient({
            name: "",
            pregnancy: "",
            risk: "",
            village: "",
            phone: "",
            status: "Active",
            referredOn: "",
            referralStatus: "Pending",
            eye: "",
            tongue: "",
            nailImage: "",
            age: "",
        });
    };

    return (
        <div className="page-content">
            <h1 className="text-3xl font-bold text-foreground">Patient Data</h1>

            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="village-select" className="text-muted-foreground ">
                        Select Village:
                    </label>
                    <select
                        id="village-select"
                        className="rounded-md border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground p-2"
                        value={villageFilter}
                        onChange={(e) => setVillageFilter(e.target.value)}
                    >
                        <option>All Villages</option>
                        {villages.map((village) => (
                            <option key={village.id} value={village.name}>
                                {village}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        id="village-select"
                        className="rounded-md border-gray-300 dark:border-slate-600 bg-red-600 text-white p-2"
                        value={villageFilter}
                        onClick={() => setShowAddModal(true)}
                    >
                        + Add Patient
                    </button>
                    <div className="relative mt-4 md:mt-0">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            id="patient-search"
                            placeholder="Search patients..."
                            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-foreground rounded-md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-card rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Name
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Age
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Pregnancy
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Risk Level
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Status
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="transition-opacity duration-300">
                            <PatientTableRows
                                villageFilter={villageFilter}
                                search={search}
                                patients={allPatients}
                            />
                        </tbody>
                    </table>
                </div>
                {showAddModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-lg relative">
                            {/* Close */}
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={closeModal}
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl text-foreground font-bold mb-4">
                                Add New Patient
                            </h2>
                            <form onSubmit={handleAdd} className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    className="w-full p-2 border rounded text-foreground"
                                    value={newPatient.name}
                                    onChange={(e) =>
                                        setNewPatient({ ...newPatient, name: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Age"
                                    className="w-full p-2 border rounded text-foreground"
                                    value={newPatient.age}
                                    onChange={(e) => {
                                        const cleaned = e.target.value.replace(/[^0-9]/g, "");

                                        setNewPatient({ ...newPatient, age: cleaned });
                                    }}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Pregnancy (in Months)"
                                    className="w-full p-2 border rounded text-foreground "
                                    value={newPatient.pregnancy}
                                    onChange={(e) => {
                                        const cleaned = e.target.value.replace(/[^0-9]/g, "");
                                        setNewPatient({ ...newPatient, pregnancy: cleaned });
                                    }}
                                    required
                                />
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="Risk Score"
                                    className="w-full p-2 border rounded text-foreground"
                                    value={newPatient.risk}
                                    onChange={(e) => {
                                        const cleaned = e.target.value.replace(/[^0-9]/g, "");

                                        setNewPatient({ ...newPatient, risk: cleaned });
                                    }}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Village"
                                    className="w-full p-2 border rounded text-foreground"
                                    value={newPatient.village}
                                    onChange={(e) =>
                                        setNewPatient({ ...newPatient, village: e.target.value })
                                    }
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full p-2 border rounded text-foreground"
                                    value={newPatient.phone}
                                    onChange={(e) =>
                                        setNewPatient({ ...newPatient, phone: e.target.value })
                                    }
                                    required
                                />

                                {/* File Uploads */}
                                <div>
                                    <label className="block font-medium text-foreground">
                                        Eye Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, "eye")}
                                        className="w-full text-muted-foreground border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-2 cursor-pointer"
                                    />
                                    {newPatient.eye && (
                                        <img
                                            src={newPatient.eye}
                                            alt="Eye Preview"
                                            className="mt-2 h-20 rounded"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="block font-medium text-foreground">
                                        Tongue Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, "tongue")}
                                        className="w-full text-muted-foreground border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-2 cursor-pointer"
                                    />
                                    {newPatient.tongue && (
                                        <img
                                            src={newPatient.tongue}
                                            alt="Tongue Preview"
                                            className="mt-2 h-20 rounded"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="block font-medium text-foreground">
                                        Nail Image
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, "nailImage")}
                                        className="w-full text-muted-foreground border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-2 cursor-pointer"
                                    />
                                    {newPatient.nailImage && (
                                        <img
                                            src={newPatient.nailImage}
                                            alt="Nail Preview"
                                            className="mt-2 h-20 rounded"
                                        />
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                >
                                    Save Patient
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Patient;

export const getRiskBadge = (risk) => {
    if (risk > 8.0)
        return (
            <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 dark:bg-red-900/50 dark:text-red-300 rounded-full">
                High
            </span>
        );
    if (risk > 7.0)
        return (
            <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">
                Moderate
            </span>
        );
    if (risk > 5.0)
        return (
            <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 rounded-full">
                Mild
            </span>
        );
    return (
        <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">
            Normal
        </span>
    );
};

export const getStatusBadge = (status) => {
    switch (status) {
        case "Completed":
            return (
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full">
                    Completed
                </span>
            );
        case "Pending":
            return (
                <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">
                    Pending
                </span>
            );
        case "Referred":
            return (
                <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 rounded-full">
                    Referred
                </span>
            );
        case "Reviewed":
            return (
                <span className="px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-100 dark:bg-purple-900/50 dark:text-purple-300 rounded-full">
                    Reviewed
                </span>
            );
        default:
            return (
                <span className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                    Marked
                </span>
            );
    }
};

const PatientTableRows = ({ villageFilter, search, patients }) => {
    console.log(patients);

    const [filteredPatients, setFilteredPatients] = useState(patients);

    useEffect(() => {
        if (villageFilter !== "All Villages") {
            patients = patients.filter((p) => p.village === villageFilter);
        }
        if (search) {
            patients = patients.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
        }
        setFilteredPatients(patients);
    }, [villageFilter, search , patients]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const openPatientModal = (p) => {
        setSelectedPatient(p);
    };

    const [referStatus, setReferStatus] = useState(
        mockData.patients
            .map((p) => ({ [p.id]: p?.referralStatus || "idle" }))
            .reduce((a, b) => ({ ...a, ...b }), {}),
    );

    // e.g. { "p1": "idle", "p2": "loading", "p3": "done" }

    const handleRefer = (id) => {
        setReferStatus((prev) => ({ ...prev, [id]: "loading" }));
        setTimeout(() => {
            setReferStatus((prev) => ({ ...prev, [id]: "Referred" }));
        }, 1500);
    };

    return (
        <>
            {filteredPatients.map((p) => {
                const referred = referStatus[p.id] !== "idle";

                const status = referStatus[p.id] || "idle";

                const referedS = getStatusBadge(status);

                return (
                    <tr
                        key={p.id}
                        className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                        <td className="p-4 font-medium text-gray-800 dark:text-white">{p.name}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-400">{p.age}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-400">{p.pregnancy}</td>
                        <td className="p-4">{getRiskBadge(p.risk)}</td>
                        <td className="p-4">{referedS}</td>
                        <td className="p-4 flex gap-2">
                            <button
                                onClick={() => openPatientModal(p)}
                                className="p-2 text-rose-600 bg-rose-100 dark:text-rose-300 dark:bg-rose-900/50 rounded-md hover:bg-rose-200 dark:hover:bg-rose-900 transition-colors"
                            >
                                <Eye className="icon-eye" />
                            </button>
                            <button
                                onClick={() => handleRefer(p.id)}
                                className={`refer-btn p-2 text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/50 rounded-md hover:bg-green-200 dark:hover:bg-green-900 transition-colors ${
                                    referred ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={referred || status === "loading" || status !== "idle"}
                            >
                                {status === "idle" && <Send className="w-4 h-4 icon-send" />}
                                {status === "loading" && (
                                    <Loader2 className="w-4 h-4 animate-spin icon-loader" />
                                )}
                                {status !== "idle" && status !== "loading" && (
                                    <Check className="w-4 h-4 text-green-600 icon-check" />
                                )}
                            </button>
                        </td>
                    </tr>
                );
            })}
            {/* Modal renders only when patient is selected */}
            <div className={`modal  ${selectedPatient ? "flex" : ""}`}>
                {selectedPatient && (
                    <PatientModal
                        patient={selectedPatient}
                        onClose={() => setSelectedPatient(null)}
                    />
                )}
            </div>
        </>
    );
};

function PatientModal({ patient, onClose }) {
    if (!patient) return null; // don't render if no patient selected

    return (
        <div id="patient-modal-content" className="modal-content max-w-3xl">
            <div class=" bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 ">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                            {patient.name}
                        </h2>
                        <p class="text-gray-500 dark:text-gray-400">
                            {patient.age} years old, from {patient.village}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        class="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                        &times;
                    </button>
                </div>
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
                            Patient Details
                        </h3>
                        <div class="space-y-3 text-gray-700 dark:text-gray-300">
                            <p>
                                <strong>Pregnancy Status:</strong> {patient.pregnancy}
                            </p>
                            <p>
                                <strong>Anemia Risk Score:</strong>{" "}
                                <span class="font-bold text-xl text-gray-900 dark:text-white">
                                    {patient.risk}
                                </span>{" "}
                                {getRiskBadge(patient.risk)}
                            </p>
                            <p>
                                <strong>Referral Status:</strong>
                                {getStatusBadge(patient.referralStatus || "Marked")}
                            </p>
                        </div>
                        <h3 class="font-semibold text-lg mt-6 mb-4 text-gray-800 dark:text-white">
                            Screening Images
                        </h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center">
                                <img
                                    src="./assets/eye.jpg"
                                    class="rounded-lg shadow-md w-full aspect-square object-cover"
                                    alt="Eye"
                                />
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Eye Score: 8.5
                                </p>
                            </div>
                            <div class="text-center">
                                <img
                                    src="./assets/tongue.jpeg"
                                    class="rounded-lg shadow-md w-full aspect-square object-cover"
                                    alt="Tongue"
                                />
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Tongue Score: 7.9
                                </p>
                            </div>
                            <div class="text-center">
                                <img
                                    src="./assets/nailbed.png"
                                    class="rounded-lg shadow-md w-full aspect-square object-cover"
                                    alt="Nailbed"
                                />
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Nailbed Score: 8.1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-semibold text-lg mb-4 text-gray-800 dark:text-white">
                            Referral History
                        </h3>

                        <ReferralTimeline />
                    </div>
                </div>
            </div>
        </div>
    );
}
