import React, { Component } from "react";
import { Shake } from "reshake";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import characters from "./characters.json";
import Instructions from "./components/Instructions";
import ScoreBoard from "./components/ScoreBoard";


class App extends Component {

	// Set our state variables
	state = {
		guessArray: [],
		message: "Click image to begin!",
		score: 0,
		topScore: 0,
		shake: 0
	};
	// Card is clicked
	clickCard = card => {
		let guessArray = this.state.guessArray;
		let score = this.state.score;
		// If we already clicked this card...
		if (guessArray[card.id]) {
			this.setState({
				message: "Game Over!",
				topScore: Math.max(this.state.score, this.state.topScore),
				guessArray: [],
				score: 0,
				shake: 0.55      // Shake screen for 0.75 seconds
			})
			// Otherwise it was a good guess!
		}
		else {
			guessArray[card.id] = true;
			this.setState({
				message: "Good Job!",
				guessArray: guessArray,
				score: ++score,
				shake: 0
			}, () => {
				if (this.state.score === 12) {
					this.setState({
						message: "You Won!",
						topScore: Math.max(this.state.score, this.state.topScore),
						guessArray: [],
						score: 0,
					})
				}
			})
		}
	}
	// Render the page
	render() {
		return (
			<div>
				<Navbar message={this.state.message} />
				<Instructions />
				<ScoreBoard
					score={this.state.score}
					topScore={this.state.topScore} />
				{/* Use "reshake" to shake the page on a wrong answer */}
				<Shake h={25} v={10} r={5} q={this.state.shake} dur={650} int={2.6} max={40} fixed={true} fixedStop={false} freez={false}>
					<Wrapper>
						{characters
							.sort((a, b) => 0.5 - Math.random())
							.map(randomCard => (
								<CharacterCard
									clickCard={this.clickCard}
									id={randomCard.id}
									key={randomCard.id}
									image={randomCard.image} />))}
					</Wrapper>
				</Shake>
				<Footer />
			</div>
		);
	}
}

export default App;

