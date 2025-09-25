import { useEffect, useState } from "react";
import { mockData } from "../utils/mockdata";
import { Search, Send, Loader2, Check, Eye, Circle, LineChart } from "lucide-react";
import { getStatusBadge } from "./Patients";
const Referrals = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    return (
        <div class="page-content">
            <h1 class="text-3xl font-bold text-foreground">Referral Management</h1>
            <p class="text-muted-foreground mt-1">Track and manage high-risk patient referrals.</p>
            <div class="mt-8 bg-card p-6 rounded-2xl shadow-lg">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Patient Name
                                </th>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Village
                                </th>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Referred On
                                </th>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Risk Level
                                </th>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Status
                                </th>
                                <th class="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="referral-table-body">
                            {mockData.patients
                                .filter((p) => p.risk > 8.0)
                                .map((p) => (
                                    <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td class="p-4 font-medium text-gray-800 dark:text-white">
                                            {p.name}
                                        </td>
                                        <td class="p-4 text-gray-600 dark:text-gray-400">
                                            {p.village}
                                        </td>
                                        <td class="p-4 text-gray-600 dark:text-gray-400">
                                            {p.referredOn}
                                        </td>
                                        <td class="p-4 font-semibold text-red-600 dark:text-red-400">
                                            {p.risk}
                                        </td>
                                        <td class="p-4">{getStatusBadge(p.referralStatus)}</td>
                                        <td class="p-4">
                                            <button
                                                onClick={() => setSelectedPatient(p)}
                                                class="flex items-center gap-2 text-sm px-3 py-2 text-rose-600 bg-rose-100 dark:text-rose-300 dark:bg-rose-900/50 rounded-md hover:bg-rose-200 dark:hover:bg-rose-900 transition-colors"
                                            >
                                                <LineChart className="w-4 h-4" />
                                                View Timeline
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="referral-modal" className={"modal" + (selectedPatient ? " flex" : "")}>
                <div id="referral-modal-content" className="modal-content max-w-lg">
                    {selectedPatient && (
                        <ReferralModal
                            patient={selectedPatient}
                            onClose={() => setSelectedPatient(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Referrals;

export function ReferralTimeline() {
    const timeline = mockData.referralTimeline;

    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
        items.forEach((item, i) => {
            setTimeout(() => item.classList.add("animate"), i * 100);
        });
    }, [timeline]);

    return (
        <div className="timeline">
            {timeline?.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot bg-rose-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <div className="pl-4">
                        <p className="font-semibold text-gray-800 dark:text-white">{item.status}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.note}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {item.user} – {item.date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function ReferralModal({ patient, onClose }) {
    if (!patient) return null;

    const stages = ["Referred", "Reviewed", "Pending", "Completed"];
    const currentStageIndex = stages.indexOf(patient.referralStatus);

    return (
        <div className="bg-card  rounded-xl shadow-lg w-full max-w-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Referral Status
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">For {patient.name}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                    &times;
                </button>
            </div>

            {/* Timeline */}

            <div className="mt-6">
                <ReferralTimeline />
            </div>
        </div>
    );
}
