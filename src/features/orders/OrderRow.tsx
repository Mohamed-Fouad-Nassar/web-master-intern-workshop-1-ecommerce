import { useState } from "react";

import { TOrder } from "../../types/orders.types";
import Modal from "../../components/Modal";

export default function OrderRow({
  order: { id, items, subtotal },
}: {
  order: TOrder;
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {id}
        </th>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {items.length} item(s) in the order
          <button
            onClick={() => setOpenModal(true)}
            className="ml-2 font-medium text-third cursor-pointer hover:underline"
          >
            Details
          </button>
        </td>
        <td className="px-6 py-4 font-medium text-gray-900">
          ${subtotal.toFixed(2)}
        </td>

        <td className="w-0">
          <Modal
            isOpen={openModal}
            title={`Order #${id} Details`}
            handleCloseModal={() => setOpenModal(false)}
          >
            {items.map(({ id, img, price, quantity, title }) => (
              <div
                key={id}
                className="flex gap-4 items-start not-last-of-type:border-b not-last-of-type:border-gray-200 not-last-of-type:mb-4 not-last-of-type:pb-4"
              >
                <img className="max-w-[120px]" src={img} alt="product-image" />

                <div className="flex-1 flex flex-col gap-2">
                  <h4 className="text-gray-900 font-medium">{title}</h4>
                  <span>
                    Qty:{" "}
                    <span className="text-gray-900 font-medium">
                      {quantity}
                    </span>
                  </span>
                  <span>
                    Price:{" "}
                    <span className="text-gray-900 font-medium">${price}</span>
                  </span>
                </div>
              </div>
            ))}
          </Modal>
        </td>
      </tr>
    </>
  );
}
