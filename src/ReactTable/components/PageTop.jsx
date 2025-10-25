import React from 'react';

import SearchInput from './SearchInput';

const PageTop = ({ performSearch, handleBulkDelete, selectedRow }) => {
  return (
    <div className="top">
      <SearchInput performSearch={performSearch} />
      <button
        className="delete-button-top"
        onClick={() => handleBulkDelete(selectedRow)}
      >
        <button>DELETE</button>
      </button>
    </div>
  );
};

export default PageTop;
