import React from "react";
import _ from "lodash";

function Pagination(props) {
	const { pageSize, itemsCount, onPageChange, currentPage } = props;

	const pages = Math.ceil(itemsCount / pageSize);
	if (pages === 1) return null;
	const pagesList = _.range(0x1, pages + 0x1);

	return (
		<nav>
			<ul className="pagination">
				{pagesList.map((page, index) => (
					<li
						key={index}
						style={{ cursor: "pointer" }}
						className={
							"page-item " +
							(currentPage === page ? "active" : "")
						}
					>
						<span
							onClick={() => onPageChange(page)}
							className="page-link"
						>
							{page}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

function getcurrentPage(itemsCount, pageSize, currentPage) {
	const pages = Math.ceil(itemsCount / pageSize);
	const pagesList = _.range(0x1, pages + 0x1);
	if (pagesList.includes(currentPage)) return currentPage;
	return pagesList.slice(-1).pop();
}

export { getcurrentPage };
export default Pagination;
