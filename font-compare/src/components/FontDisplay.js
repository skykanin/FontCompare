import React from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import appUri from "../api.js";

const Clickable = styled.a``;

const DisplayBox = styled.div`
  background: transparent;
  border: 4px solid white;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  width: 50%;
  left: 20%;
  margin: 1rem;
  transition: transform 0.7s;

  &:hover {
    transform: scale(1.1);
  }
`;

const TextBox = styled.div`
  font-family: ${(props) => props.fontName};
  font-size: 1.8rem;
`;

// Display font name and some example text in said font
// Let user case a vote
const FontDisplay = (props) => {
  const castVote = () => {
    console.log("You have voted for: " + props.fontName);
    axios.post(appUri + "/vote/register", { id: props.fontId }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    props.history.push("/list");
  };

  return (
    <Clickable onClick={castVote}>
      <DisplayBox className="FontBox">
        <h2>{props.fontName}</h2>
        <TextBox fontName={props.fontName}>{props.exampleText}</TextBox>
      </DisplayBox>
    </Clickable>
  );
};

export default withRouter(FontDisplay);
