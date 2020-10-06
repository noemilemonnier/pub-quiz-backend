import React from "react";
import { Table } from "react-bootstrap";
import { useTable, useSortBy } from "react-table";
import '../assets/style/react-table.css'

/**
 * As in the previous versions, any react table needs colums where at the core we have a field Header, and accessor
 * As in the previous versions, a react table has data that consist of an array of JSONs
 */
const ReactTable = ({ columns, data }) => {
  // you can get the react table functions by using the hook useStable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    // hook for sorting
    useSortBy
  );
  return (
    <Table id='teamslist' bordered {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              // three new addition to column: isSorted, isSortedDesc, getSortByToggleProps
              const {
                render,
                getHeaderProps,
                isSorted,
                isSortedDesc,
                getSortByToggleProps
              } = column;
              const extraClass = isSorted
                ? isSortedDesc
                  ? "desc"
                  : "asc"
                : "";
              return (
                <th
                  className={extraClass}
                  // getHeaderProps now receives a function
                  {...getHeaderProps(getSortByToggleProps())}
                >
                  {render("Header")}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ReactTable;