import  {useEffect, useState} from 'react';
import type {Advert} from "../common/Advert.ts";
import AdvertItem from "./AdvertItem.tsx";



const AdvertList = () => {
    const [adverts, setAdverts] = useState<Advert[]>([]);
    const [message, setMessage] = useState<string | null>(null);

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
    return (
        <div>
            {message && <p className="text-red-400">{message}</p>}
            <ul>
                {adverts.map((advert) => (
                    <AdvertItem
                        key={advert.id}
                        title={advert.title}
                        description={advert.description}
                        photo={advert.photo}
                    />
                ))}
            </ul>
            
        </div>
    );
};

export default AdvertList;