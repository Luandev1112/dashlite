import React, { useEffect } from "react";
import Icon from "../icon/Icon";
import { Pagination, PaginationLink, PaginationItem, Row, Col } from "reactstrap";

const DataTablePagination = ({
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
  onChangeRowsPerPage,
  customItemPerPage,
  setRowsPerPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    paginate(currentPage + 1);
  };

  const prevPage = () => {
    paginate(currentPage - 1);
  };

  useEffect(() => {
    onChangeRowsPerPage(customItemPerPage);
    setRowsPerPage(customItemPerPage);
  }, [customItemPerPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Row className="align-items-center">
      <Col className="col-7" sm="12" md="9">
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={currentPage - 1 === 0 ? true : false}>
            <PaginationLink
              className="page-link-prev"
              onClick={(ev) => {
                ev.preventDefault();
                prevPage();
              }}
              href="#prev"
            >
              <Icon name="chevrons-left" />
              <span>Prev</span>
            </PaginationLink>
          </PaginationItem>
          {pageNumbers.map((item) => {
            return (
              <PaginationItem className={`d-none d-sm-block ${currentPage === item ? "active" : ""}`} key={item}>
                <PaginationLink
                  tag="a"
                  href="#pageitem"
                  onClick={(ev) => {
                    ev.preventDefault();
                    paginate(item);
                  }}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem disabled={pageNumbers[pageNumbers.length - 1] === currentPage}>
            <PaginationLink
              className="page-link-next"
              onClick={(ev) => {
                ev.preventDefault();
                nextPage();
              }}
              href="#next"
            >
              <span>Next</span>
              <Icon name="chevrons-right" />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Col>
      <Col sm="12" md="3" className="col-5 text-left text-md-right">
        <div className="dataTables_info" id="DataTables_Table_2_info" role="status" aria-live="polite">
          1 - {customItemPerPage} of {totalItems}
        </div>
      </Col>
    </Row>
  );
};
export default DataTablePagination;
