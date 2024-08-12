import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import ProptTypes from "prop-types";

export default function Pagination({
  totalPages,
  currentPage,
  pagesToShow,
  onPageChange,
}) {
  return (
    <div className="flex justify-center self-center overflow-hidden rounded">
      <button
        disabled={currentPage === 1}
        className="text-primary disabled:text-primary/60 flex h-8 w-8 items-center justify-center"
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      {/* Pages before current page */}
      {Array(Math.min(pagesToShow, currentPage - 1))
        .fill()
        .map((_, i) => (
          <button
            className="text-dark flex h-8 w-8 items-center justify-center"
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

      {currentPage > pagesToShow + 1 && (
        <button
          disabled
          className="text-dark flex h-8 w-8 items-center justify-center"
        >
          ...
        </button>
      )}

      {/* Current page */}
      <button
        disabled
        className="text-secondary flex h-8 w-8 items-center justify-center font-semibold"
      >
        {currentPage}
      </button>

      {currentPage < totalPages - pagesToShow && (
        <button
          disabled
          className="text-dark flex h-8 w-8 items-center justify-center"
        >
          ...
        </button>
      )}

      {/* Pages after current page */}
      {Array(Math.min(pagesToShow, totalPages - currentPage))
        .fill()
        .map((_, i) => (
          <button
            className="text-dark flex h-8 w-8 items-center justify-center"
            key={i + 1}
            onClick={() => onPageChange(totalPages - i)}
          >
            {totalPages - i}
          </button>
        ))
        .reverse()}

      <button
        disabled={currentPage === totalPages}
        className="text-primary disabled:text-primary/60 flex h-8 w-8 items-center justify-center"
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: ProptTypes.number.isRequired,
  currentPage: ProptTypes.number.isRequired,
  pagesToShow: ProptTypes.number.isRequired,
  onPageChange: ProptTypes.func.isRequired,
};
