
import type {AdvertItemProps} from "../common/AdvertItemProps.ts";

const AdvertItem = ({title, description, photo, onEdit}:AdvertItemProps) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-white mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-black">{description}</p>
            {photo && (
                <img
                    src={photo}
                    alt={title}
                    className="max-w-xs mt-2 rounded"
                />
            )}
            {onEdit && (
                <button
                onClick={onEdit}
                className="mt-2 text-black text-sm font-semibold "> Edit</button>
            )}
        </div>
    );
};

export default AdvertItem;