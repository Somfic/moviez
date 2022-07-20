import "./App.scss";
import React from "react";
import { fetchShowings } from "./api/movies";
import { Models } from "./api/models";
import ShowingScroller from "./components/ShowingScroller";

interface IProps {}

interface IState {
	showings: Models.Showing[] | undefined;
}

export default class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = { showings: undefined };
	}

	componentDidMount() {
		fetchShowings().then(res => this.setState({ showings: res }));
	}

	render() {
		if (this.state.showings === undefined) {
			return <p>Loading</p>;
		} else {
			return <ShowingScroller showings={this.state.showings} />;
		}
	}
}
