import assets from "../../assets/assets";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const {
    icons: { AddIcon2 },
  } = assets;

  const getPaginationRange = (
    totalPages: number,
    currentPage: number,
    siblingCount = 1
  ): (number | string)[] => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPages > totalPageNumbers) {
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.max(
        currentPage + siblingCount,
        totalPages
      );

      const shouldShowLeftEllipsis = leftSiblingIndex > 2;
      const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPages;

      if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from(
          { length: leftItemCount },
          (_, index) => index + 1
        );
        return [...leftRange, "...", totalPages];
      }

      if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from(
          { length: rightItemCount },
          (_, index) => totalPages - rightItemCount + index + 1
        );
        return [firstPageIndex, "...", ...rightRange];
      }

      if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
        const middleRange = Array.from(
          { length: siblingCount * 2 + 1 },
          (_, index) => leftSiblingIndex + index
        );
        return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
      }
    }
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  const paginationRange = getPaginationRange(totalPages, currentPage);

  return (
    <div className="flex gap-2">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-1 rounded-lg bg-[#DEDEFA]"
      >
        <img src={AddIcon2} />
      </button>
      {paginationRange.map((page, index) => {
        if (typeof page === "number") {
          return (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`${
                page === currentPage
                  ? "bg-[#5C59E8] text-white"
                  : "bg-[#DEDEFA] text-[#5C59E8]"
              } size-8 rounded-lg`}
            >
              {page}
            </button>
          );
        } else {
          return (
            <button
              key={index}
              disabled
              className="bg-[#DEDEFA] text-[#5C59E8] size-8 rounded-lg"
            >
              {page}
            </button>
          );
        }
      })}
      <button
        className="px-1 rounded-lg bg-[#DEDEFA]"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={AddIcon2} />
      </button>
    </div>
  );
};

export default Pagination;
