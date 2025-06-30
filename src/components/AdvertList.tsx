import {useEffect, useState} from 'react';
import type {Advert} from "../common/Advert.ts";
import AdvertItem from "./AdvertItem.tsx";
import EditAdvertForm from "./EditAdvertForm.tsx";


const AdvertList = () => {
    const [adverts, setAdverts] = useState<Advert[]>([]);
    const [message, setMessage] = useState<string | null>(null);
    const [selectedAdvertId, setSelectedAdvertId] = useState<number | null>(null);

    async function fetchAdverts() {
        try {
            const res = await fetch("/api/adverts");
            const arr = await res.json();
            setAdverts(arr);
            setMessage(null);
        } catch (err) {
            console.error(err);
            setMessage("Advert not loaded");
        }
    }

    useEffect(() => {
        fetchAdverts();
    }, []);

    const handleAdvertUpdated = () => {
        setSelectedAdvertId(null);
        fetchAdverts(); // перезагрузить список
    };


    const handleEditClick = (id: number) => {
        setSelectedAdvertId(id);
    }


    return (
        <div className="p-4">
            {message && <p className="text-red-400">{message}</p>}

            <ul className="space-y-4">
                {adverts.map((advert) => (
                    <li key={advert.id} className="border-b pb-4">
                        <AdvertItem
                            title={advert.title}
                            description={advert.description}
                            photo={advert.photo}
                            onEdit={() => handleEditClick(advert.id)}
                        />
                    </li>
                ))}
            </ul>

            {selectedAdvertId !== null && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-2">Edit Advert</h3>
                    <EditAdvertForm advertId={selectedAdvertId}/>

                    <div className="flex justify-between items-center mt-2">
                        <button
                            onClick={() => setSelectedAdvertId(null)}
                            className="text-sm text-gray-500 hover:underline"
                        >
                            Close Form
                        </button>
                        <button
                            onClick={()=>{
                                handleAdvertUpdated();}}
                            className="bg-green-500 text-white text-sm px-4 py-1 rounded hover:bg-green-600"
                        >
                            Save and Refresh List
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default AdvertList;