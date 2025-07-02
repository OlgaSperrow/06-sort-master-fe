// EditAdvertCard.tsx
import type { FormikProps } from "formik";
import type { AdvertFormValues } from "../common/AdvertFormValues.ts";

interface Props {
    formik: FormikProps<AdvertFormValues>;
}

const EditAdvertCard = ({ formik }: Props) => {
    return (
        <>
            <div className="space-y-1">
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    {...formik.getFieldProps("title")}
                    className={`w-full px-3 py-1 text-sm border rounded-md shadow-sm text-black ${
                        formik.touched.title && formik.errors.title
                            ? "border-gray-700"
                            : "border-input"
                    }`}
                    placeholder="Advert title"
                />
                {formik.touched.title && formik.errors.title && (
                    <p className="text-sm text-black">{formik.errors.title}</p>
                )}
            </div>

            <div className="space-y-1">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    {...formik.getFieldProps("description")}
                    className={`w-full px-3 py-1 text-sm border rounded-md shadow-sm text-black ${
                        formik.touched.description && formik.errors.description
                            ? "border-gray-700"
                            : "border-input"
                    }`}
                    placeholder="Advert description"
                />
                {formik.touched.description && formik.errors.description && (
                    <p className="text-sm text-black">{formik.errors.description}</p>
                )}
            </div>

            <div className="space-y-1">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                    Photo URL
                </label>
                <input
                    id="photo"
                    type="text"
                    {...formik.getFieldProps("photo")}
                    className={`w-full px-3 py-1 text-sm border rounded-md shadow-sm text-black ${
                        formik.touched.photo && formik.errors.photo
                            ? "border-gray-700"
                            : "border-input"
                    }`}
                    placeholder="Photo URL"
                />
                {formik.touched.photo && formik.errors.photo && (
                    <p className="text-sm text-black">{formik.errors.photo}</p>
                )}
            </div>
        </>
    );
};

export default EditAdvertCard;
