import Spinner from "../components/Spinner";
import OrderRow from "../features/orders/OrderRow";

import useOrders from "../features/orders/useOrders";

const titles = ["#", "Items", "Total Price"];

export default function Orders() {
  const { isLoading, error, orders } = useOrders();

  const totalPurchases = orders.reduce((acc, order) => acc + order.subtotal, 0);

  return (
    <section className="overflow-x-hidden flex-1 p-4 rounded bg-gray-100">
      <h2 className="text-2xl font-medium mb-4">Orders</h2>
      {isLoading ? (
        <div className="mx-auto">
          <Spinner />
        </div>
      ) : (
        <div className="relative shadow overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 font-medium uppercase bg-gray-50 border-b border-gray-200">
              <tr>
                {titles.map((title) => (
                  <th key={title} scope="col" className="px-6 py-4">
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 || error ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap"
                  >
                    {error || "No orders found."}
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <OrderRow key={order?.id} order={order} />
                ))
              )}
            </tbody>

            {orders.length === 0 || error ? null : (
              <tfoot>
                <tr className="bg-white">
                  <td
                    colSpan={2}
                    className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
                  >
                    Total Purchases
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">
                    ${totalPurchases.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )}
    </section>
  );
}
