import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../Redux/Filter/slice";

import { RootState } from "../../Redux/store";
import cl from './Pagination.module.scss'

type T ={
  selected: number
}
const Pagination: React.FC = () => {
  const currentPage = useSelector((state:RootState) => state.filter.currentPage);
  const dispatch = useDispatch();
  return  <ReactPaginate
  breakLabel="..."
  className={cl.root}
  nextLabel=">"
  onPageChange={(e:T) => dispatch(setCurrentPage(e.selected+1))}
  pageRangeDisplayed={4}
  pageCount={4}
  forcePage={currentPage - 1}
  previousLabel="<"
/>;
};

export default Pagination;
