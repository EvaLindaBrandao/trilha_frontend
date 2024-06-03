import { Package } from "@/types/package";
import Link from "next/link";

// Icons
import { AiOutlineEye } from "react-icons/ai";

const packageData: Package[] = [
  {
    name: "Programação",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Em progresso",
  },
  {
    name: "Designer Gráfico",
    price: 59.0,
    invoiceDate: `Jan 13,2023`,
    status: "Em progresso",
  },
  {
    name: "Matemática",
    price: 0.0,
    invoiceDate: `Jan 13,2023`,
    status: "Concluido",
  },
  {
    name: "Música",
    price: 99.0,
    invoiceDate: `Jan 13,2023`,
    status: "Parado",
  },
];

const TrailTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Nome
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Data de inicio
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Estado
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Ação
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  <p className="text-sm">{packageItem.price} kz</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.invoiceDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Concluido"
                        ? "bg-success text-success"
                        : packageItem.status === "Parado"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link
                      href={"/trilhas/" + packageItem.name}
                      className="hover:text-primary"
                    >
                      <AiOutlineEye size={23} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { TrailTable };
