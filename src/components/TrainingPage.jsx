const trainingVideos = [
    { id: 2, title: "Using the Device Properly", url: "https://youtube.com/embed/ry2zA8ogYZQ" },
    {
        id: 3,
        title: "Steps to Refer a Patient to Hospital",
        url: "https://youtube.com/embed/maZjl7QrZtY?si=7E9PAw0IiLFRzoJI",
    },
    {
        id: 4,
        title: "Record Keeping and Reporting for ASHA Workers",
        url: "https://www.youtube.com/embed/11tMsHKcazE",
    },
    {
        id: 5,
        title: "ASHA Worker : Responsibilties ",
        url: "https://youtube.com/embed/Kfv_6t3fL9c?si=HjMEu5_Wby4i5ZM-",
    },
    {
        id: 6,
        title: "How to Counsel Pregnant Women on Nutrition",
        url: "https://www.youtube.com/embed/0BrxCY89_uQ",
    },
    {
        id: 1,
        title: "How to Click Patient Images",
        url: "https://www.youtube.com/embed/86zlCZhaoR0",
    },
];

export default function TrainingPage() {
    return (
        <div className="p-6 space-y-6 page-content mb-30">
            <h1 className="text-2xl font-bold text-foreground border-b pb-2">
                ASHA Worker Training
            </h1>

            <p className="text-muted-foreground">
                Welcome! Here you can watch step-by-step video tutorials on how to use your device
                effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
                {trainingVideos.map((video) => (
                    <div key={video.id} className="bg-card shadow rounded-lg border p-4">
                        <h2 className="text-lg font-semibold text-foreground mb-2">
                            {video.title}
                        </h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full aspect-video rounded-lg border"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
