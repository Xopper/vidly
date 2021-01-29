import React from "react";

const Like = props => {
	let classes = "fa fa-heart";
	if (!props.liked) classes += "-o";
	return (
		<i
			className={classes}
			onClick={props.onLike}
			aria-hidden="true"
			style={{ color: props.liked ? "#ff4d4d" : "", cursor: "pointer" }}
		></i>
	);
};

export default Like;
