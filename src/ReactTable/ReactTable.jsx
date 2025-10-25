import React from 'react';
import './App.css';
import { useApi } from './hooks/useApi';
import { usePagination } from './hooks/usePagination';
import PageBottom from './components/PageBottom';
import PageTop from './components/PageTop';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableFooterCell,
  TableFooterRow,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from './components/Table';

function ReactTable() {
  const URL =
    'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
  const {
    data,
    performSearch,
    handleRowSelection,
    selectedRowId,
    handleBulkDelete,
    handleBulkSelection,
  } = useApi(URL);

  const {
    currentPage,
    PAGE_LIMIT,
    goToNextPage,
    goToPrevPage,
    pageArray,
    goToFirstPage,
    goToLastPage,
    goToPageNum,
    numPages,
    paginatedData,
  } = usePagination(data);

  return (
    <div className="App">
      <Table
        data={paginatedData}
        selectionType="single"
        selectedRowId={selectedRowId}
        onSelectionChange={handleRowSelection}
        handleBulkSelection={handleBulkSelection}
        isLoading={false}
        isStickyHeader={true}
        isStickyFooter={true}
        isStickyFistColumn={true}
        pagination={() => (
          <PageBottom
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
            pageArray={pageArray}
            goToFirstPage={goToFirstPage}
            goToLastPage={goToLastPage}
            goToPageNum={goToPageNum}
            numPages={numPages}
            currentPage={currentPage}
            selectedRow={selectedRowId.length}
            totalRow={data.length}
          />
        )}
        toolbar={() => (
          <PageTop
            performSearch={performSearch}
            handleBulkDelete={handleBulkDelete}
            selectedRow={selectedRowId}
          />
        )}
      >
        {(tableData) => (
          <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell headerKey="name">
                  <input
                    type="checkbox"
                    onChange={handleBulkSelection}
                    checked={selectedRowId.length === data.length}
                  />
                  Name
                </TableHeaderCell>
                <TableHeaderCell headerKey="email">Email</TableHeaderCell>
                <TableHeaderCell headerKey="role">Role</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>

            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row}
                  onClick={() => console.log(row)}
                  isDisabled={false}
                >
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selectedRowId.includes(row.id)}
                      onChange={() => handleRowSelection(row.id)}
                    />
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableFooterRow>
                <TableFooterCell>Total</TableFooterCell>
                <TableFooterCell>200Rs</TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>
        )}
      </Table>
    </div>
  );
}

export default ReactTable;
