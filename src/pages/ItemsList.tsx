import {useEffect, useState} from 'react';
import type {Item} from "../common/Types.ts";
import ItemsCard from "../components/ItemsCard.tsx";


const ItemsList = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/items")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load items.");
                return res.json();
            })
            .then(setItems)
            .catch((err) => setError(err.message));

    }, []);

    if (error)
        return <div className="text-red-500">Error loading items.</div>;

    return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center py-10">
            <div className="max-w-2xl  px-1">
                <h3 className="text-2xl font-bold mb-4"> All Items</h3>
                <ul className="space-y-0.5">
                    {items.map((item) => (<ItemsCard key={item.id} item={item}/>))}
                </ul>

            </div>
        </div>
    );
};

export default ItemsList;