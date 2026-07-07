export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="rounded-full border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50">
        Previous
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index} onClick={() => onPageChange(index + 1)} className={`rounded-full px-3 py-2 text-sm ${currentPage === index + 1 ? 'bg-brand-600 text-white' : 'border'}`}>
          {index + 1}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="rounded-full border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50">
        Next
      </button>
    </div>
  );
}
