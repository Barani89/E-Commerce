export default function LoadingSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="h-56 bg-slate-200" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-24 rounded bg-slate-200" />
            <div className="h-5 w-3/4 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-10 rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
