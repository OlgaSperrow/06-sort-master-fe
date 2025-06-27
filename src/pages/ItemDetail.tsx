import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import type {ExtendedItem} from "../common/ExtendedItem.ts";

const ItemDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<ExtendedItem | undefined>(undefined);


    async function fetchItem(id: string | undefined) {
            const res = await fetch(`/api/items/extended/${id}`);
            if(!res.ok) {
                throw new Error("Error loading item details.");
            }
            const data = await res.json();
            setItem(data);
    }

    useEffect(() => {
            fetchItem(id);
    }, [id]);

    return (
        <div>
          Item: {item?.name} <span style ={{backgroundColor: item?.container?.color}}>
            Container: {item?.container?.id}</span>

        </div>
    );
};

export default ItemDetail;