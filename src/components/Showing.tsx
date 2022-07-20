import React from "react";
import { Models } from "../api/models";
import "./Showings.scss";
import Time from "./Time";

interface IProps {
	showing: Models.Showing;
}

export default class Showing extends React.Component<IProps> {
	render() {
		const image =
			"https://cdn.kinepolis.nl/images" +
			(
				this.props.showing.film.images.find(i => i.mediaType === Models.MediaType.PosterGraphic)! ??
				this.props.showing.film.images[0]
			).url;

		return (
			<>
				<div className="showing">
					<div className="info">
						<div className="title">{this.props.showing.film.title}</div>
					</div>
					<div className="poster">
						<img src={image} alt="je moeder" />
					</div>
					<div className="info">
						<div className="times">
							{this.props.showing.sessions.map(s => (
								<Time time={new Date(s.showtime)} />
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}
