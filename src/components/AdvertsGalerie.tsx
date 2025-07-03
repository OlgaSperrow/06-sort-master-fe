import { useState } from "react";
import { useAdvertContext } from "../app/UseAdvertContext.ts";
import EditAdvertForm from "./EditAdvertForm";

const AdvertCarousel = () => {
    const { adverts } = useAdvertContext();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAdvertId, setSelectedAdvertId] = useState<number | null>(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? adverts.length - 1 : prev - 1));
        setSelectedAdvertId(null);  // При смене слайда скрываем форму
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === adverts.length - 1 ? 0 : prev + 1));
        setSelectedAdvertId(null);
    };

    if (adverts.length === 0) {
        return <div>No adverts available.</div>;
    }

    const currentAdvert = adverts[currentIndex];

    return (
        <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{currentAdvert.title}</h3>
            <p className="mb-2">{currentAdvert.description}</p>

            {currentAdvert.photo && (
                <img
                    src={currentAdvert.photo}
                    alt={currentAdvert.title}
                    className="mx-auto mb-2 max-h-60 object-cover"
                />
            )}

            <div className="flex justify-center space-x-4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    ← Prev
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Next →
                </button>
            </div>


            <div className="mt-4">
                <button
                    onClick={() => setSelectedAdvertId(currentAdvert.id)}
                    className="text-sm px-4 py-2 bg-gray-200 rounded text-blue-500 hover:underline"
                >
                    Edit This Advert
                </button>
            </div>


            {selectedAdvertId !== null && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-2">Edit Advert</h3>
                    <EditAdvertForm
                        advertId={selectedAdvertId}
                        onUpdated={() => setSelectedAdvertId(null)}
                    />
                    <button
                        onClick={() => setSelectedAdvertId(null)}
                        className="mt-2 text-sm text-gray-500 hover:underline"
                    >
                        Close Form
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdvertCarousel;
