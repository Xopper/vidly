import _ from "lodash";
/**
 *
 * @param {*} items All items to be paginate
 * @param {Number} pageNumber the currentPage number
 * @param {Number} pageSize items to be showed per page
 */
export function paginate(items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 0x1) * pageSize;
	return _(items)
		.slice(startIndex)
		.take(pageSize)
		.value();
}
