import type {Item} from "../common/Types.ts";


type Props = {
    item: Item;
};

const ItemsCard = ({item}: Props ) => {
    return (
        <li className="p-4 rounded-lg bg-green-300 text-black">
            <h4> {item.name}</h4>
            <p> Container ID: {item.containerId}</p>

        </li>
    );
};

export default ItemsCard;
