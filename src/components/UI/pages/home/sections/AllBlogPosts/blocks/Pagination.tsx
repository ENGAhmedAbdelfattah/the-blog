"use client";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "@/redux/app/hooks";
import { updateActivePageNumber } from "@/redux/features/activePageNumber/activePageNumberSlice";

type dataSelected = {selected: number}

function Pagination() {
  const dispatch = useAppDispatch();

  const handlePageClick = ({selected} : dataSelected) => {
    const currentPageNumber = selected + 1;
    dispatch(updateActivePageNumber(currentPageNumber))
  };

  const pageCount = 10;
  // const pageCount = Math.max(100 / 10);
  return (
    <ReactPaginate
      onPageChange={handlePageClick}
      pageCount={pageCount}
      breakLabel={"..."}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      previousLabel={""}
      nextLabel={""}
      containerClassName={"ul-paginate"}
      pageClassName={"li-paginate"}
      pageLinkClassName={"a-paginate"}
      activeClassName={"li-active-paginate"}
      previousClassName={"li-previous-paginate"}
      previousLinkClassName={"a-previous-paginate"}
      nextClassName={"li-next-paginate"}
      nextLinkClassName={"a-next-paginate"}
      breakClassName={"li-break-paginate li-paginate"}
      breakLinkClassName={"a-break-paginate a-paginate"}
    />
  );
}

export default Pagination;
