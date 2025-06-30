import {useEffect, useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import type {Advert} from "../common/Advert.ts";
import EditAdvertCard from "./EditAdvertCard.tsx";

interface Props {
    advertId: number;
}

const EditAdvertForm = ({advertId}:Props) => {
    const [message, setMessage] = useState<{ type: string; text: string } | null>(
        null
    );
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            photo: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            photo: Yup.string().url("Must be a valid URL").nullable(),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch(`/api/adverts/${advertId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json", accept: "*/*" },
                    body: JSON.stringify(values),
                });
                if (!response.ok) throw new Error("Failed to update advert");
                setMessage({ type: "success", text: "Advert updated successfully!" });
            } catch (e: any) {
                setMessage({ type: "error", text: e.message });
            }
        },
    });

    useEffect(() => {
        fetch(`/api/adverts/${advertId}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load advert");
                return res.json();
            })
            .then((data: Advert) => {
                formik.setValues({
                    title: data.title,
                    description: data.description,
                    photo: data.photo || "",
                });
            })
            .catch((e) => alert(e.message));
    }, [advertId]);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 10000); // 10 секунд = 10000 мс


            return () => clearTimeout(timer);
        }
    }, [message]);
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="max-w-md mx-auto p-4 border rounded space-y-2"
        >

            {message && (
                <div
                    className={`p-2 rounded text-sm ${
                        message.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {message.text}
                </div>
            )}

            <EditAdvertCard formik={formik} />

            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-800"
            >
                Save
            </button>

        </form>
    );
};

export default EditAdvertForm;