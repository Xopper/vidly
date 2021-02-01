import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
	renderCell = (item, column) => {
		if (column.content) return column.content(item);
		return _.get(item, column.path);
	};
	render() {
		const { data: movies, columns } = this.props;
		return (
			<tbody>
				{movies.map(item => (
					<tr key={item._id}>
						{columns.map((column, index) => (
							<td key={index}>{this.renderCell(item, column)}</td>
						))}
					</tr>
				))}
			</tbody>
		);
	}
}

export default TableBody;
