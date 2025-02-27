import Button from "./Button";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  callBack: () => void;
  children: React.ReactNode;
  handleCloseModal: () => void;
}

export default function Modal({
  title,
  isOpen,
  children,
  callBack,
  handleCloseModal,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 flex items-center justify-center bg-white/20 bg-opacity-50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl w-[90%] max-w-md"
      >
        <div className="flex justify-between items-center border-b border-gray-200 px-6 pt-4 pb-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={handleCloseModal}
            className="cursor-pointer rounded px-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 px-4">{children}</div>
        <div className="pt-4 px-6 pb-4 mt-4 flex gap-2 justify-end border-t border-gray-200">
          <Button
            variation="third"
            className="!py-1.5"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button className="!py-1.5" onClick={callBack}>
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
}
