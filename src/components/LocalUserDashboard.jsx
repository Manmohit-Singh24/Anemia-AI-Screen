// import React from "react";
// import { getRiskBadge, getStatusBadge } from "./Patients";
// import { useSelector } from "react-redux";
// const patients = [
//     {
//         id: "L001",
//         name: "Manpreet Kaur",
//         age: 25,
//         pregnancyMonth: 6,
//         riskLevel: "High",
//         status: "Referred",
//         doctor: "Dr. Arora",
//         hospital: "Civil Hospital Ludhiana",
//     },
//     {
//         id: "L002",
//         name: "Gurpreet Kaur",
//         age: 23,
//         pregnancyMonth: 4,
//         riskLevel: "Medium",
//         status: "Pending",
//         doctor: "—",
//         hospital: "—",
//     },
// ];

// export default function LocalUserDashboard() {
//     const username = useSelector((state) => state.AuthData.username);
//     const p = {
//         id: "L001",
//         name: username,
//         age: 25,
//         pregnancy: 6,
//         riskLevel: "High",
//         status: "Referred",
//         doctor: "Dr. Arora",
//         hospital: "Civil Hospital Ludhiana",
//     };
//     return (
//         <div className="p-6 space-y-6 page-content">
//             {/* Page Title */}
//             <h1 className="text-2xl font-bold text-foreground border-b pb-2">Welcome , you are i right hands </h1>

//             <h1 className="text-2xl font-bold text-foreground border-b pb-2">Your Data </h1>

//             {/* Patients Table */}
//             <div className="overflow-x-auto bg-card shadow rounded-lg border">
//                 <table className="w-full border-collapse">
//                     <thead className="bg-card">
//                         <tr>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Name
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Age
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Pregnancy
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Risk Level
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Status
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Doctor
//                             </th>
//                             <th className="p-3 text-left text-sm font-semibold text-foreground border-b">
//                                 Hospital
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="hover:bg-gray-50 transition">
//                             <td className="p-4 font-medium text-gray-800 dark:text-white">
//                                 {p.name}
//                             </td>
//                             <td className="p-4 text-gray-600 dark:text-gray-400">{p.age}</td>
//                             <td className="p-4 text-gray-600 dark:text-gray-400">
//                                 {p.pregnancy} Months
//                             </td>
//                             <td className="p-4">{getRiskBadge(p.risk)}</td>
//                             <td className="p-3 border-b text-sm text-muted-foreground">
//                                 {getStatusBadge(p.status)}
//                             </td>
//                             <td className="p-3 border-b text-sm text-muted-foreground">
//                                 {p.doctor}
//                             </td>
//                             <td className="p-3 border-b text-sm text-muted-foreground">
//                                 {p.hospital}
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//             <div className="p-6 space-y-6">
//                 <h1 className="text-2xl font-bold text-foreground border-b pb-2">
//                     Health Recommendations
//                 </h1>{" "}
//                 <div className="aspect-w-16 aspect-h-9 mt-10 rounded-md">
//                     <iframe
//                         className="w-full aspect-video rounded-lg border"
//                         src="https://www.youtube.com/embed/-pM1jZV_a0o?si=BRQ2m2xiB1CmB0NL"
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
//                         referrerpolicy="strict-origin-when-cross-origin"
//                         allowfullscreen
//                     ></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { getRiskBadge, getStatusBadge } from "./Patients";
import { useSelector } from "react-redux";

export default function LocalUserDashboard() {
    const username = useSelector((state) => state.AuthData.username);

    const p = {
        id: "L001",
        name: username || "User",
        age: 25,
        pregnancy: 6,
        riskLevel: "High",
        status: "Referred",
        doctor: "Dr. Arora",
        hospital: "Civil Hospital Ludhiana",
    };

    return (
        <div className=" space-y-8 page-content mt-0 mb-50">
            {/* Welcome Card */}
            <div className="bg-card shadow rounded-lg border p-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">
                        👋 Welcome back, {p.name}!
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
                    <p className="text-xl font-bold text-foreground">{p.pregnancy}</p>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <div className="flex justify-center mt-1">{getRiskBadge(p.riskLevel)}</div>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex justify-center mt-1">{getStatusBadge(p.status)}</div>
                </div>
                <div className="bg-card border shadow rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">Doctor</p>
                    <p className="text-md font-medium">{p.doctor}</p>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="p-4 font-medium">{p.name}</td>
                                <td className="p-4 text-muted-foreground">{p.age}</td>
                                <td className="p-4 text-muted-foreground">{p.pregnancy} Months</td>
                                <td className="p-4">{getRiskBadge(p.riskLevel)}</td>
                                <td className="p-4">{getStatusBadge(p.status)}</td>
                                <td className="p-4 text-muted-foreground">{p.doctor}</td>
                                <td className="p-4 text-muted-foreground">{p.hospital}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

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
                </div>
            </div>

            {/* Reminders */}
            <div>
                <h2 className="text-xl font-bold text-foreground border-b pb-2 mb-3">Next Steps</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Take your iron and calcium supplements daily.</li>
                    <li>Schedule next checkup with {p.doctor}.</li>
                    <li>Track baby movements regularly.</li>
                </ul>
            </div>
        </div>
    );
}

