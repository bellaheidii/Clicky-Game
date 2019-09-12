import React, { Component } from "react";
import "./style.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentDidUpdate({ score, topScore }, prevState) {
    const newState = { animating: true };

    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }
