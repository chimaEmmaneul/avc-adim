import { Pen, Trash2 } from "lucide-react"
import { Currency } from "../../@types"
import { useRouter } from "next-nprogress-bar"


type PointConversionTableProps = {
  currencies: Currency[]
}

const PointConversionTable = ({ currencies }: PointConversionTableProps) => {
  const router = useRouter()
  return (
    <div className="w-full">
      <div className="overflow-x-auto ">
        <table className="w-full">
          <thead className="">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Currency Code
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Exchange Rate
              </th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currencies.map((currency: Currency, index: number) => (
              <tr key={`${currency.code}-${index}`} className="transition-colors hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-600 font-medium">{currency.name}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{currency.code}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span className="px-3 py-1 inline-block w-fit">{currency.exchange_rate}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => router.push(`/settings/point-conversion/${currency.id}`)}
                      className="p-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Pen className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default PointConversionTable