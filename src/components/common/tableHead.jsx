import React, { Component } from "react";

class tableHead extends Component {
	raiseSort = path => {
		let sortColumn = { ...this.props.sortColumn };
		if (sortColumn.path === path)
			sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
		else sortColumn = { path, order: "asc" };
		this.props.onSort(sortColumn);
	};

	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map((column, i) => (
						<th
							key={i}
							onClick={() =>
								column.path && this.raiseSort(column.path)
							}
							scope="col"
						>
							{column.label}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default tableHead;
