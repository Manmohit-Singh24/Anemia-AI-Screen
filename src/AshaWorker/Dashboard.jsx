import Slider from "../Hospital/Slider";
import DashboardCharts from "./DashboardCharts";
import { useEffect } from "react";
import { mockData } from "../utils/mockdata";
import { ScanLine, Siren, Loader, CheckCircle2 } from "lucide-react";
const Dashboard = () => {
    useEffect(() => {
        document.querySelectorAll("[data-counter]").forEach((counter) => {
            const target = +counter.dataset.counter;
            let current = 0;
            const increment = target / 100;
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }, []);

    const vilageTable = Object.entries(mockData.villages).map(([name, data]) => {
        const progress = (data.highRisk > 0 ? Math.random() * 50 + 20 : 100).toFixed(0);
        return (
            <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td class="p-4 font-medium text-gray-800 dark:text-white">{name}</td>
                <td class="p-4 text-gray-600 dark:text-gray-400">{data.screened}</td>
                <td class="p-4 text-red-600 font-semibold">{data.highRisk}</td>
                <td class="p-4">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                            class="progress-bar-animated bg-rose-600 h-2.5 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </td>
            </tr>
        );
    });

    console.log(vilageTable);

    return (
        <div className="page-content mb-50">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground  mt-1">
                Welcome back! Here's a summary of the screening program.
            </p>
            <Slider />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                <div className="bg-card p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-transform transform hover:-translate-y-1">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                        <ScanLine className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Screened</p>
                        <p
                            className="text-3xl font-bold text-gray-800 dark:text-foreground"
                            data-counter="482"
                        >
                            0
                        </p>
                    </div>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-transform transform hover:-translate-y-1">
                    <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-full">
                        <Siren className="w-7 h-7 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">High-Risk Cases</p>
                        <p
                            className="text-3xl font-bold text-gray-800 dark:text-foreground"
                            data-counter="63"
                        >
                            0
                        </p>
                    </div>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-transform transform hover:-translate-y-1">
                    <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-full">
                        <Loader className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Referrals Pending
                        </p>
                        <p
                            className="text-3xl font-bold text-gray-800 dark:text-foreground"
                            data-counter="19"
                        >
                            0
                        </p>
                    </div>
                </div>
                <div className="bg-card p-6 rounded-2xl shadow-lg flex items-center gap-4 transition-transform transform hover:-translate-y-1">
                    <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full">
                        <CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Referrals Completed
                        </p>
                        <p
                            className="text-3xl font-bold text-gray-800 dark:text-foreground"
                            data-counter="44"
                        >
                            0
                        </p>
                    </div>
                </div>
            </div>
            <DashboardCharts />
            <div className="mt-8 bg-card  p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-foreground mb-4">Village Overview</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Village Name
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Total Screened
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    High Risk
                                </th>
                                <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    Progress
                                </th>
                            </tr>
                        </thead>
                        <tbody id="village-overview-body">{vilageTable}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
