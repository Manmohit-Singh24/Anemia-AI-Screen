import React, { useMemo } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

// Register chart.js modules
ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);
import { mockData } from "../utils/mockdata";
import { useSelector } from "react-redux";

const getChartOptions = (isDark) => {
    const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
    const textColor = isDark ? "#cbd5e1" : "#475569";

    return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: { color: textColor },
            },
            x: {
                grid: { color: gridColor },
                ticks: { color: textColor },
            },
        },
        plugins: {
            legend: {
                labels: { color: textColor },
            },
        },
    };
};

const DashboardCharts = () => {
    const isDark = useSelector( (state) =>  state.AuthData.theme === "dark");

    const riskData = useMemo(
        () => ({
            labels: Object.keys(mockData.villages),
            datasets: [
                {
                    label: "High Risk",
                    data: Object.values(mockData.villages).map((v) => v.highRisk),
                    backgroundColor: "rgba(225, 29, 72, 0.6)",
                    borderColor: "rgba(225, 29, 72, 1)",
                    borderWidth: 1,
                    borderRadius: 5,
                },
                {
                    label: "Moderate Risk",
                    data: Object.values(mockData.villages).map((v) => Math.floor(v.highRisk * 1.5)),
                    backgroundColor: "rgba(245, 158, 11, 0.6)",
                    borderColor: "rgba(245, 158, 11, 1)",
                    borderWidth: 1,
                    borderRadius: 5,
                },
            ],
        }),
        [mockData],
    );

    const referralData = {
        labels: ["Completed", "Pending", "Reviewed"],
        datasets: [
            {
                data: [44, 19, 12],
                backgroundColor: ["#10B981", "#F59E0B", "#8B5CF6"],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
            <div className="lg:col-span-3 bg-card p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-foreground">Risk Distribution by Village</h2>
                <div className="chart-container mt-4 h-[400px]">
                    <Bar data={riskData} options={getChartOptions(isDark)} />
                </div>
            </div>

            <div className="lg:col-span-2 bg-card p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-foreground">Overall Referral Status</h2>
                <div className="chart-container mt-4 h-[400px]">
                    <Doughnut data={referralData} options={getChartOptions(isDark)} />
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
