import React from "react";
import { getRiskBadge, getStatusBadge } from "./Patients";
import { useSelector } from "react-redux";
import {Eye , X} from "lucide-react";

export default function LocalUserDashboard() {
    const username = useSelector((state) => state.AuthData.username);
    const [showImageModal, setShowImageModal] = React.useState(false);
    const patient = {
        id: "L001",
        name: username || "User",
        age: 25,
        pregnancy: 6,
        riskLevel: "High",
        status: "Referred",
        doctor: "Dr. Meera Sharma",
        hospital: "Civil Hospital Ludhiana",
    };

    return (
        <div className=" space-y-8 page-content mt-0 mb-50">
            {/* Welcome Card */}
            <div className="bg-card shadow rounded-lg border p-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">
                        👋 Welcome back, {patient.name}!
                    </h1>
                    <p className="text-muted-foreground">
                        You are in safe hands. Here’s an overview of your health journey.
                    </p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Pregnancy Month</p>
                    <p className="text-xl font-bold text-foreground">{patient.pregnancy}</p>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <div className="flex justify-center mt-1">
                        {getRiskBadge(patient.riskLevel)}
                    </div>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex justify-center mt-1">{getStatusBadge(patient.status)}</div>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Doctor</p>
                    <p className="text-md font-medium text-foreground">{patient.doctor}</p>
                </div>
            </div>

            {/* Detailed Table */}
            <div>
                <h2 className="text-xl font-bold text-foreground border-b pb-2 mb-3">
                    Your Details
                </h2>
                <div className="overflow-x-auto bg-card shadow rounded-lg border">
                    <table className="w-full border-collapse">
                        <thead className="bg-card">
                            <tr>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Name
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Age
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Pregnancy
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Risk Level
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Status
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Doctor
                                </th>
                                <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
                                    Hospital
                                </th>
                                <th className="pr-2 text-center text-sm font-semibold text-foreground border-b">
                                    View Images
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="p-4 font-medium text-foreground">{patient.name}</td>
                                <td className="p-4 text-muted-foreground">{patient.age}</td>
                                <td className="p-4 text-muted-foreground">
                                    {patient.pregnancy} Months
                                </td>
                                <td className="p-4">{getRiskBadge(patient.riskLevel)}</td>
                                <td className="p-4">{getStatusBadge(patient.status)}</td>
                                <td className="p-4 text-muted-foreground">{patient.doctor}</td>
                                <td className="p-4 text-muted-foreground">{patient.hospital}</td>
                                <td className="p-4 text-center">
                                    <button
                                        className="p-2 text-rose-600 bg-rose-100 dark:text-rose-300 dark:bg-rose-900/50 rounded-md hover:bg-rose-200 dark:hover:bg-rose-900 transition-colors"
                                        onClick={() => {
                                            setShowImageModal(true);
                                        }}
                                    >
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {showImageModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-full max-w-2xl relative">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowImageModal(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold mb-6 text-foreground">
                            Patient Images - {patient.name}
                        </h2>

                        {/* Images grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center">
                                <img
                                    src="./assets/eye.jpg"
                                    alt="Eye"
                                    className="w-full h-40 object-cover rounded-lg border"
                                />
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Eye</p>
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Eye Score: 8.5
                                </p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="./assets/tongue.jpeg"
                                    alt="Tongue"
                                    className="w-full h-40 object-cover rounded-lg border"
                                />
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Tongue
                                </p>
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Tongue Score: 7.9
                                </p>
                            </div>
                            <div className="text-center">
                                <img
                                    src="./assets/nailbed.png"
                                    alt="Nail"
                                    className="w-full h-40 object-cover rounded-lg border"
                                />
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Nail
                                </p>
                                <p class="text-xs mt-1 font-medium text-gray-600 dark:text-gray-400">
                                    Nailbed Score: 8.1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Recommendations */}
            <div>
                <h2 className="text-xl font-bold text-foreground border-b pb-2 mb-3">
                    Health Recommendations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <iframe
                        className="w-full aspect-video rounded-lg border"
                        src="https://www.youtube.com/embed/-pM1jZV_a0o"
                        title="Health Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="w-full aspect-video rounded-lg border"
                        src="https://www.youtube.com/embed/8rjccoRDvJQ?si=FWPuh7mHEaEUIyyw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        className="w-full aspect-video rounded-lg border"
                        src="https://www.youtube.com/embed/xMkOchqMaoQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            {/* Reminders */}
            <div>
                <h2 className="text-xl font-bold text-foreground border-b pb-2 mb-3">Next Steps</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Take your iron and calcium supplements daily.</li>
                    <li>Schedule next checkup with {patient.doctor}.</li>
                    <li>Track baby movements regularly.</li>
                </ul>
            </div>
        </div>
    );
}
