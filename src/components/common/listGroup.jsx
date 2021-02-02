import React from "react";

const ListGroup = ({
	items: genres,
	onItemSelect,
	textProperty,
	keyProperty,
	selectedItem
}) => {
	return (
		<ul className="list-group">
			{genres.map((genre, index) => (
				<li
					key={genre[keyProperty] ? genre[keyProperty] : index}
					onClick={() => onItemSelect(genre)}
					className={
						"clickable list-group-item " +
						(genre === selectedItem ? "active" : "")
					}
				>
					{genre[textProperty]}
				</li>
			))}
		</ul>
	);
};

ListGroup.defaultProps = {
	textProperty: "name",
	keyProperty: "_id"
};

export default ListGroup;
