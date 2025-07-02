import {useContext} from "react";
import {AdvertContext} from "../components/AdvertContext"

export const useAdvertContext = () => {
    const context = useContext(AdvertContext);
    if (!context) {
        throw new Error("useAdvertContext must be used within AdvertProvider");
    }
    return context;
};
