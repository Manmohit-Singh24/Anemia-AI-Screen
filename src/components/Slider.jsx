import React, { useState, useEffect, useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
    { src: "./assets/SmillingTribal.png", alt: "Smiling tribal woman" },
    {
        src: "./assets/AshaWorkerWithTablet.png",
        alt: "ASHA worker with a tablet",
    },
    {
        src: "./assets/VillageWomen.png",
        alt: "Group of happy women in a village",
    },
    {
        src: "./assets/SmillingDoctor.png",
        alt: "Healthcare professional smiling",
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef(null);

    // Show specific slide
    const showSlide = (index) => {
        setCurrentIndex((prev) => (index + images.length) % images.length);
    };

    // Auto slide logic
    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideRef.current = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
    };

    // Start auto slide on mount
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // cleanup on unmount
    }, [currentIndex]);

    return (
        <div
            id="image-slider"
            className="relative overflow-hidden w-full mx-auto aspect-video rounded-2xl shadow-lg"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            {/* Slides */}
            <div
                id="slider-wrapper"
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img key={i} src={img.src} alt={img.alt} className="w-full flex-shrink-0" />
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                id="prev-slide"
                onClick={() => showSlide(currentIndex - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-foreground px-3 py-2 rounded-full"
            >
                <ArrowLeft />
            </button>
            <button
                id="next-slide"
                onClick={() => showSlide(currentIndex + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-foreground px-3 py-2 rounded-full"
            >
                <ArrowRight />
            </button>

            {/* Dots */}
            <div
                id="slider-dots"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
            >
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => showSlide(i)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                            i === currentIndex ? "bg-white" : "bg-white/50"
                        }`}
                    >

                        

                    </button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
