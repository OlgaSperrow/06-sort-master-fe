import {useEffect, useState} from "react";

interface Container {
    id: string;
    color: string;
    name: string;
    description: string;
}

const ContainerList = () => {
    const [containers, setContainers] = useState<Container []>([]);
    const [error, setError] = useState<null | string>(null);
    const [message, setMessage] = useState<null | string>(null);
    const [aktiveInput, setAktiveInput] = useState<null | string>(null);
    const [newItems, setNewItems] = useState<Record<string, string>>({});

    useEffect(() => {
        fetch("/api/containers")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(setContainers)
            .catch(setError);
    }, []);

    const handleDelete = (id: string) => {
        fetch(`/api/containers/${id}`, {method: "DELETE"})
            .then((res) => {
                if (!res.ok) throw new Error("Failed to delete container.");
                setContainers((prev) => prev.filter((c) => c.id !== id));
                setMessage("Container successfully deleted.");
            })
            .catch((err) => {
                setError(err.message || "Container is not deleted");
            });
    };

    const handleAddItem = (containerId: string) => {
        const itemText = newItems[containerId]?.trim();
        if (!itemText) {
            return;
        }

        fetch(`/api/items`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: itemText,
                    containerId: containerId
                }),
            }).then((res) => {
            if (!res.ok) throw new Error("Failed to add item.");
            setMessage("Item successfully added.");
            setNewItems((prev) => ({...prev, [containerId]: ""}));
            setAktiveInput(null);
        })
            .catch((err) => {
                setError(err.message || "Failed to add item.");
            });
    };


    if (error)
        return <div className="text-red-500">Error loading containers.</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Rubbish Containers</h2>
            <ul className="space-y-4">
                {containers.map((container: Container) => (
                    <li
                        key={container.id}
                        className="p-4 rounded-lg shadow-md text-white"
                        style={{backgroundColor: container.color}}
                    >

                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">{container.name}</h3>
                                <p className="my-1">{container.description}</p>
                            </div>

                            <button
                                onClick={() => handleDelete(container.id)}
                                className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-700 rounded"
                            >
                                Delete
                            </button>
                        </div>


                        <div className="mt-auto flex items-start flex-col">
                            <input type="text" placeholder=" new item name"
                                   value={newItems[container.id]}
                                   onChange={(e) => setNewItems((prev) => ({
                                       ...prev,
                                       [container.id]: e.target.value
                                   }))}
                                   className="px-3 py-1 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 mb-2 w-full"
                                   style={{
                                       backgroundColor: container.color,
                                       color: "black"
                                   }}
                            />
                            <button
                                onClick={() => handleAddItem(container.id)}
                                className="ml-4 px-3 py-1 bg-gray-300 hover:bg-gray-200 rounded text-black"
                            >
                                addItem
                            </button>

                        </div>


                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContainerList;


