export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) {
    return <p>No result</p>;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageNumberClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {/* <span>
        {currentPage} / {totalPages}
      </span> */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageNumberClick(number)}
          disabled={number === currentPage}
        >
          {number}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </>
  );
}
