import React from "react";

interface IProps {
	time: Date;
}

export default class Time extends React.Component<IProps> {
	render() {
		const pad = (num: number, size: number) => String(num).padStart(size, "0");

		return (
			<p className="time">
				{pad(this.props.time.getHours(), 2)}:{pad(this.props.time.getMinutes(), 2)}
			</p>
		);
	}
}
