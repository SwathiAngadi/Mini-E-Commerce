// components/Pagination.jsx
export default function Pagination({ page, totalItems, limit, onPageChange }) {
    const totalPages = Math.ceil(totalItems / limit);
  
    // create array [1, 2, 3, ..., totalPages]
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-center items-center gap-2 mt-6">
        {/* Prev Button */}
        <button
          className="px-3 py-1 bg-pink-300 rounded disabled:opacity-50"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
  
        {/* Page Numbers */}
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-3 py-1 rounded font-medium transition ${
              num === page
                ? "bg-pink-500 text-white"
                : "bg-pink-200 hover:bg-pink-300"
            }`}
          >
            {num}
          </button>
        ))}
  
        {/* Next Button */}
        <button
          className="px-3 py-1 bg-pink-200 rounded disabled:opacity-50"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
  