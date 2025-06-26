import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import type {Item} from "../common/Item.ts";
import type Container from "../common/Types.ts";



const ItemDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [container, setContainer] = useState<Container | undefined>(undefined);

    async function fetchItem(id: string | undefined) {
            const res = await fetch(`/api/items/${id}`);
            if(!res.ok) {
                throw new Error("Error loading item details.");
            }
            const data = await res.json();
            setItem(data);
            fetchContainer(data.containerId)
    }

    async function fetchContainer(containerId: string) {

            const res = await fetch(`/api/containers/${containerId}`);
            if(!res.ok) {
                throw new Error("Error loading container.");
            }
            const data = await res.json();
            setContainer(data);

    }

    useEffect(() => {
            fetchItem(id);
    }, [id]);

    return (
        <div>
          Item: {item?.name} <span style ={{backgroundColor: container?.color}}>
            Container: {container?.id}</span>

        </div>
    );
};

export default ItemDetail;