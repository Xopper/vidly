import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
	return (
		<table className="table">
			<TableHead
				columns={columns}
				sortColumn={sortColumn}
				onSort={onSort}
			/>
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
