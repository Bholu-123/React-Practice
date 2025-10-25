import React, { useState } from 'react';

const Table = ({
  data,
  handleBulkSelection,
  handleRowSelection,
  selectedRowIds,
  selectionType,
  pagination,
  toolbar,
  children,
}) => {
  return (
    <>
      {toolbar && toolbar()}
      <table id="employee">{children(data)}</table>
      {pagination && pagination()}
    </>
  );
};

const TableHeader = ({ children }) => {
  return <thead>{children}</thead>;
};

const TableHeaderRow = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableHeaderCell = ({ headerKey, children }) => {
  return <th data-header-key={headerKey}>{children}</th>;
};

const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ onClick, isDisabled, children }) => {
  return (
    <tr onClick={onClick} className={isDisabled ? 'disabled' : ''}>
      {children}
    </tr>
  );
};

const TableCell = ({ children }) => {
  return <td>{children}</td>;
};

const TableFooter = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

const TableFooterRow = ({ children }) => {
  return <tr>{children}</tr>;
};

const TableFooterCell = ({ children }) => {
  return <td>{children}</td>;
};

export {
  Table,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableFooterRow,
  TableFooterCell,
};
