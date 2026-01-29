import FormCard from "../Components/FormCard";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";

export default function FormPage() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nama: "",
            umur: "",
            gender: "",
            perokok: "",
            rokok: [],
        },
    });

    const perokokValue = useWatch({
        control,
        name: "perokok",
    });

    const onSubmit = (data) => {
        const existing =
            JSON.parse(localStorage.getItem("surveyResults")) || [];

        localStorage.setItem(
            "surveyResults",
            JSON.stringify([...existing, data])
        );

        navigate("/result");
    };

    return (
        <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
            <div className="w-full max-w-2xl space-y-4">
                {/* Header */}
                <div className="bg-white rounded-lg border-t-8 border-[#673ab7] p-6 shadow">
                    <h1 className="text-2xl font-medium mb-2">Form Survei</h1>
                    <p className="text-sm text-gray-600">
                        Silakan isi data berikut dengan jujur.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Nama */}
                    <FormCard title="Siapa nama anda?" required>
                        <input
                            {...register("nama", {
                                required: "Nama wajib diisi",
                            })}
                            className="w-full border-b border-gray-400 focus:border-[#673ab7] focus:outline-none py-2"
                            placeholder="Jawaban Anda"
                        />
                        {errors.nama && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.nama.message}
                            </p>
                        )}
                    </FormCard>

                    {/* Umur */}
                    <FormCard title="Berapa umur anda?">
                        <input
                            type="number"
                            {...register("umur", {
                                required: "Umur wajib diisi",
                                min: {
                                    value: 1,
                                    message: "Umur tidak valid",
                                },
                            })}
                            className="w-full border-b border-gray-400 focus:border-[#673ab7] focus:outline-none py-2"
                            placeholder="Jawaban Anda"
                        />
                        {errors.umur && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.umur.message}
                            </p>
                        )}
                    </FormCard>

                    {/* Gender */}
                    <FormCard title="Apa jenis kelamin anda?">
                        {["Laki-Laki", "Perempuan"].map((item) => (
                            <label key={item} className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    value={item}
                                    {...register("gender", {
                                        required: "Pilih salah satu",
                                    })}
                                    className="accent-[#673ab7]"
                                />
                                {item}
                            </label>
                        ))}
                        {errors.gender && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.gender.message}
                            </p>
                        )}
                    </FormCard>

                    {/* Perokok */}
                    <FormCard title="Apakah anda perokok?">
                        {["Ya", "Tidak"].map((item) => (
                            <label key={item} className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    value={item}
                                    {...register("perokok", {
                                        required: "Wajib memilih",
                                    })}
                                    className="accent-[#673ab7]"
                                />
                                {item}
                            </label>
                        ))}
                        {errors.perokok && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.perokok.message}
                            </p>
                        )}
                    </FormCard>

                    {/* Rokok (muncul hanya jika perokok = Ya) */}
                    {perokokValue === "Ya" && (
                        <FormCard title="Rokok yang pernah dicoba">
                            {["Gudang Garam", "Lucky Strike", "Marlboro", "Esse"].map(
                                (item) => (
                                    <label key={item} className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            value={item}
                                            {...register("rokok")}
                                            className="accent-[#673ab7]"
                                        />
                                        {item}
                                    </label>
                                )
                            )}
                        </FormCard>
                    )}

                    {/* Submit */}
                    <div className="flex items-center justify-between px-2">
                        <button
                            type="submit"
                            className="bg-[#673ab7] text-white px-6 py-2 rounded hover:bg-[#5e35b1]"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
