export default function ProductPrice({
  price,
  currency,
}: {
  price: number;
  currency: string;
}) {
  const [int, dec] = price.toFixed(2).split(".");

  return (
    <span className="relative flex items-start gap-1 font-ibm">
      <span className="text-sm">{currency}</span>
      <span className="text-4xl font-medium">{int}</span>
      <span className="text-sm">{dec}</span>
    </span>
  );
}
