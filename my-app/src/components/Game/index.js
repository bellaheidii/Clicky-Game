import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {
    state = {
      data,
      score: 0,
      topScore: 0
    };
  
    componentDidMount() {
      this.setState({ data: this.shuffleData(this.state.data) });
    }
  
    handleCorrectGuess = newData => {
      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = Math.max(newScore, topScore);
  
      this.setState({
        data: this.shuffleData(newData),
        score: newScore,
        topScore: newTopScore
      });
    };
  