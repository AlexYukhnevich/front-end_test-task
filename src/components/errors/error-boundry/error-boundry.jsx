import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';
class ErrorBoundry extends Component {
	state = {
		hasError: false
	}
	
	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
				return <ErrorIndicator />
		}
		return this.props.children;
	}
}

ErrorBoundry.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired
};

export default ErrorBoundry;