import _ from "lodash";
/**
 *
 * @param {*} items items to be pagenate
 * @param {Number} pageNumber the currentPage number
 * @param {Number} pageSize items to be showed per page
 */
export function paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize;
	return _(items)
		.slice(startIndex)
		.take(pageSize)
		.value();
}
