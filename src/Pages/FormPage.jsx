import FormCard from "../Components/FormCard"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function FormPage() {
    const [formData, setFormData] = useState({
        nama: "",
        umur: "",
        gender: "",
        perokok: "",
        rokok: [],
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCheckbox = (value) => {
        setFormData((prev) => {
            const alreadySelected = prev.rokok.includes(value);

            let updatedRokok;

            if (alreadySelected) {
                updatedRokok = prev.rokok.filter(
                    (item) => item !== value
                );
            } else {
                updatedRokok = [...prev.rokok, value];
            }

            return {
                ...prev,
                rokok: updatedRokok,
            };
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        const existing = JSON.parse(localStorage.getItem("surveyResults")) || []

        localStorage.setItem("surveyResults", JSON.stringify([...existing, formData]))
    }

    useNavigate("/result")

    return (
        <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
            <div className="w-full max-w-2xl space-y-4">
                <div className="bg-white rounded-lg border-t-8 border-[#673ab7] p-6 shadow">
                    <h1 className="text-2xl font-medium mb-2">Form Survei</h1>
                    <p className="text-sm text-gray-600">
                        Silakan isi data berikut dengan jujur.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <FormCard title="Siapa nama anda?" required>
                        <input
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-[#673ab7] focus:outline-none py-2"
                            placeholder="Jawaban Anda"
                        />
                    </FormCard>

                    <FormCard title="Berapa umur anda?">
                        <input
                            name="umur"
                            value={formData.umur}
                            onChange={handleChange}
                            className="w-full border-b border-gray-400 focus:border-[#673ab7] focus:outline-none py-2"
                            placeholder="Jawaban Anda"
                        />
                    </FormCard>

                    <FormCard title="Apa jenis kelamin anda?">
                        {["Laki-Laki", "Perempuan"].map((item) => (
                            <label key={item} className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={item}
                                    onChange={handleChange}
                                    className="accent-[#673ab7]"
                                />
                                {item}
                            </label>
                        ))}
                    </FormCard>

                    <FormCard title="Apakah anda perokok?">
                        {["Ya", "Tidak"].map((item) => (
                            <label key={item} className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="perokok"
                                    value={item}
                                    onChange={handleChange}
                                    className="accent-[#673ab7]"
                                />
                                {item}
                            </label>
                        ))}
                    </FormCard>

                    <FormCard title="Rokok yang pernah dicoba">
                        {["Gudang Garam", "Lucky Strike", "Marlboro", "Esse"].map(
                            (item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckbox(item)}
                                        className="accent-[#673ab7]"
                                    />
                                    {item}
                                </label>
                            )
                        )}
                    </FormCard>

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
    )
}
