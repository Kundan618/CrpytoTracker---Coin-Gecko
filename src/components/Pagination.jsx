import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <div className="join flex justify-center my-5">
        <button className="join-item btn" disabled={page === 1} onClick={() => setPage(page - 1)}>«</button>
        <button className="join-item btn">Page {page}</button>
        <button className="join-item btn" onClick={() => setPage(page + 1)}>»</button>
      </div>
    </div>
  );
};

export default Pagination;
