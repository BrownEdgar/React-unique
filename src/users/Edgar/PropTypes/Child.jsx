import React from 'react'
import PropTypes from "prop-types";

export default function Child({ arrProps, isLoading, obj,}) {
	console.log(arrProps, isLoading, obj,)
	return (
		<div>
			<h1>Info</h1>
			
		</div>
	)
}

Child.propTypes = {
	arrProps: PropTypes.arrayOf(PropTypes.string).isRequired,
	isLoading: PropTypes.bool.isRequired,
	obj: PropTypes.exact({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
	posts: PropTypes.arrayOf(PropTypes.shape({
		
	}))
}
