// context/AdvertContext.tsx
import  { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Advert } from "../common/Advert.ts";

export interface AdvertContextType {
    adverts: Advert[];
    fetchAdverts: () => Promise<void>;
    updateAdvert: (updatedAdvert: Advert) => void;
}

// Именованный экспорт контекста
export const AdvertContext = createContext<AdvertContextType | undefined>(undefined);

interface AdvertProviderProps {
    children: ReactNode;
}

export const AdvertProvider = ({ children }: AdvertProviderProps) => {
    const [adverts, setAdverts] = useState<Advert[]>([]);

    const fetchAdverts = async () => {
        try {
            const res = await fetch("/api/adverts");
            if (!res.ok) throw new Error("Failed to fetch adverts");
            const data: Advert[] = await res.json();
            setAdverts(data);
        } catch (error) {
            console.error("Error fetching adverts:", error);
        }
    };

    const updateAdvert = (updatedAdvert: Advert) => {
        setAdverts((prev) =>
            prev.map((advert) => (advert.id === updatedAdvert.id ? updatedAdvert : advert))
        );
    };

    useEffect(() => {
        fetchAdverts();
    }, []);

    return (
        <AdvertContext.Provider value={{ adverts, fetchAdverts, updateAdvert }}>
            {children}
        </AdvertContext.Provider>
    );
};
