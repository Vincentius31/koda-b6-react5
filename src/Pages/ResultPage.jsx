import ResultTable from "../Components/ResultTable"

export default function ResultPage() {
    const data = JSON.parse(localStorage.getItem("surveyResults")) || []

    if (!data.length) {
        return (
            <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
                <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-medium mb-4">
                        Hasil Survei
                    </h1>
                    <p className="text-gray-500">
                        Belum ada data
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
            <div className="w-full max-w-4xl bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-medium mb-4">
                    Hasil Survei
                </h1>

                <ResultTable data={data} />
            </div>
        </div>
    )
}
