import { Link } from "react-router";
import type { Item } from "../common/Item.ts";
import type Container from "../common/Types.ts";
import {useEffect, useState} from "react";



interface Props {
    item: Item;

}

const ItemsCard = ({ item  }: Props) => {
    const [container, setContainer] = useState<Container | null>(null);

    useEffect(() => {
        if (item.containerId) {
            fetch(`/api/containers/${item.containerId}`)
                .then((res) => res.json())
                .then(setContainer)
                .catch(console.error);
        }
    }, [item.containerId]);
    return (
        <li key={item.id} className="bg-amber-200 rounded-2xl p-2 m-2"
            style={{ backgroundColor: container?.color || "#f5f5f5" }}
        >
            Name: {item.name} Container Id: {item.containerId}

            <Link to={`/items/${item.id}`}>To item page</Link>
        </li>
    );
};

export default ItemsCard;
