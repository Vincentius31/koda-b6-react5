export default function ResultTable({data}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-center">
                <thead className="bg-[#673ab7] text-white">
                    <tr>
                        <th className="p-2">Nama</th>
                        <th className="p-2">Umur</th>
                        <th className="p-2">Gender</th>
                        <th className="p-2">Perokok</th>
                        <th className="p-2">Rokok</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i} className="border-t">
                            <td className="p-2">{item.nama}</td>
                            <td className="p-2">{item.umur}</td>
                            <td className="p-2">{item.gender}</td>
                            <td className="p-2">{item.perokok}</td>
                            <td className="p-2">{item.rokok.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
