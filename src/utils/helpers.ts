export function calculateRating(stars: { [key: number]: number }) {
  const ratingsCount = Object.values(stars).reduce(
    (acc, cur) => (acc += cur),
    0
  );

  const totalStars = Object.entries(stars).reduce(
    (acc, [key, val]) => (acc += parseInt(key) * val),
    0
  );

  const rate = ratingsCount === 0 ? 0 : (totalStars / ratingsCount).toFixed(1);

  return { rate, count: ratingsCount } as { rate: number; count: number };
}

export function formatDate(date: Date | string) {
  const d = new Date(date);
  return `${d.getDate()} ${d.toLocaleString("en-US", { month: "short" })}`;
}
