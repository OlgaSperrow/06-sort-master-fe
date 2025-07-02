import AdvertItem from "./AdvertItem";
import { useAdvertContext } from "../app/UseAdvertContext.ts";

const AdvertList = () => {
    const { adverts } = useAdvertContext();

    return (
        <div className="p-4">
            <ul className="space-y-4">
                {adverts.map((advert) => (
                    <li key={advert.id} className="pb-4">
                        <AdvertItem
                            title={advert.title}
                            description={advert.description}
                            photo={advert.photo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdvertList;
