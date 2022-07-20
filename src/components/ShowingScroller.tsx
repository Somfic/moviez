import React from "react";
import { Models } from "../api/models";
import Showing from "./Showing";
import "./Showings.scss";

interface IProps {
	showings: Models.Showing[];
}

export default class ShowingScroller extends React.Component<IProps> {
	render() {
		return (
			<>
				<div className="scroller">
					{this.props.showings.map(s => (
						<Showing showing={s} />
					))}
				</div>
			</>
		);
	}
}
