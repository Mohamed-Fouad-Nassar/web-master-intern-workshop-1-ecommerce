type TFromRowProps = {
  label: string;
  error: string | undefined;
  children: React.JSX.Element;
};
export default function FormRow({ label, error, children }: TFromRowProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label id={children?.props?.id} className="font-medium font-ibm-con">
        {label}
      </label>

      {children}

      {error && <p className="text-sm text-red-600 font-inika">{error}</p>}
    </div>
  );
}
