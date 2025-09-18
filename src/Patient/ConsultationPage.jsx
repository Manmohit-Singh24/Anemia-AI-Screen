import React from "react";
import { Phone, Video, Star } from "lucide-react";
const doctors = [
    {
        id: 1,
        name: "Dr. Arjun Singh",
        specialty: "Gynecologist",
        phone: "+91 xxxxx 43210",
        experience: 12, // years
        rating: 4.5,
        nextAvailable: "Tomorrow 10:00 AM",
        image: "./assets/doc-arjun.jpeg",
    },
    {
        id: 2,
        name: "Dr. Meera Sharma",
        specialty: "Obstetrician",
        phone: "+91 xxxxx 77665",
        experience: 8,
        rating: 4.2,
        nextAvailable: "Today 3:00 PM",
        image: "./assets/doc-meera.webp",
    },
    {
        id: 3,
        name: "Dr. Rajiv Kumar",
        specialty: "General Physician",
        phone: "+91 xxxxx 56789",
        experience: 15,
        rating: 4.8,
        nextAvailable: "Tomorrow 1:00 PM",
        image: "./assets/doc-rajiv.jpg",
    },
    {
        id: 4,
        name: "Dr. Sneha Verma",
        specialty: "Gynecologist",
        phone: "+91 xxxxx 04143",
        experience: 10,
        rating: 4.3,
        nextAvailable: "Today 11:30 AM",
        image: "./assets/doc-agam.jpeg",
    },
];

export default function ConsultationPage() {
    return (
        <div className="p-6 space-y-6 mb-30">
            <h1 className="text-2xl font-bold text-foreground border-b pb-2">Consultation</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-card shadow rounded-lg border p-4 flex flex-col items-center space-y-3 transform hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-24 h-24 rounded-full border"
                        />

                        <h2 className="text-lg font-semibold text-foreground">{doc.name}</h2>
                        <p className="text-sm text-muted-foreground">{doc.specialty}</p>

                        {/* Rating & Experience */}
                        <div className="flex items-center space-x-2 text-yellow-500">
                            <Star />
                            <span className="text-sm text-foreground font-medium">
                                {doc.rating}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                ({doc.experience} yrs)
                            </span>
                        </div>

                        {/* Next Available */}
                        <p className="text-xs text-muted-foreground mt-1">
                            Next Available:{" "}
                            <span className="font-medium text-foreground">{doc.nextAvailable}</span>
                        </p>

                        {/* Phone */}
                        <p className="text-sm text-muted-foreground mt-1">📞 {doc.phone}</p>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 mt-3">
                            <a
                                href={`tel:${doc.phone.replace(/\s/g, "")}`}
                                className="flex items-center px-4 py-1 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                            >
                                <Phone className="mr-2" /> Call
                            </a>
                            <button className="flex items-center px-4 py-1 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                <Video className="mr-2" /> Video Call
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
