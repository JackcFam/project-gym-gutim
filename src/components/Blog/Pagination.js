import React from 'react';
import PropTypes from 'prop-types';
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}
Pagination.defaultProps = {
    onPageChange: null,
}
function Pagination(props) {
    const { pagination, onPageChange } = props;
    const {_limit} = pagination;
    const pageNumber = [];
    const totalPages = Math.ceil(props.totalRows.length / _limit);
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }


    function handleClick(newPage) {

        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
      <div className="col-lg-12">
        <div className="classes__pagination blog__pagination">
                {pageNumber.map((number) => {
                    return (
                        <a href="#" key={number} onClick={() => handleClick(number)}>{number}</a>
                    )
                })}
        </div>
        </div>

    );
}

export default Pagination;
