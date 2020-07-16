import React from "react";

const Paginate = props => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-end border-0">
        {pageNumbers.map(number => {
          let classes = "page-item ";
          if (number === props.currentPage) {
            classes += "active";
          }

          return (
            <li className={classes}>
              <a
                onClick={() => props.pageSelected(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;
