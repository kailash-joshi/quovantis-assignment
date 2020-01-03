import React from 'react';
import PropTypes from 'prop-types';
import ReactPager from 'react-pager';

export default function Pager ({handlePageChanged, currentPage, totalPages}) {
  return (
    <div>
      <div className="dataTables_paginate paging_simple_numbers">
        <ReactPager 
          total={totalPages} 
          onPageChanged={handlePageChanged} 
          current={currentPage} 
          visiblePages={3}
          titles= {{
            first: 'First',
            prev: 'Prev',
            prevSet: '...',
            nextSet: '...',
            next: 'Next',
            last: 'Last'          
          }} />
      </div>
    </div>
  );
}
Pager.defaultProps = {
    handlePageChanged: () => {},
    currentPage: 0,
    totalPages: 10
}
// Pager.propTypes = {
//     handlePageChanged: PropTypes.func.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired
// }

