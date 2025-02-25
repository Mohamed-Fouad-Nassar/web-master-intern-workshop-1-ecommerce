export default function RateStat({ per, star }: { per: number; star: number }) {
  return (
    <div className="flex gap-3 items-center text-third font-cabin-con">
      <span className="w-10">{star} Star</span>
      <div className="relative flex-1 h-6 border border-gray-300 rounded-md">
        <div
          className="absolute h-[calc(100%+2px)] -left-[1px] -top-[1px] bg-secondary rounded-sm"
          style={{ width: per === 0 ? 0 : `calc(${per}% + 1px)` }}
        ></div>
      </div>
      <span className="w-10">{per}%</span>
    </div>
  );
}
