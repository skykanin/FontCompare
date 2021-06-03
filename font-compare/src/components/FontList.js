import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUri from "../api.js";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  height: 800px;
  width: 575px;
  margin: auto;
  animation: ${fadeIn} 2s cubic-bezier(0.59, 0.87, 0.73, 0.57);
`;

const Name = styled.span`
  font-family: ${(props) => props.fontName};
  font-size: 1.8rem;
`;

const FontElement = styled.div`
  border: 4px solid white;
  border-radius: 10px;
  padding: 1rem;
  width: 500px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin: 1rem;
`;

// Display single element
const Element = (props) => {
  return (
    <FontElement>
      <Name fontName={props.fontName}> {props.fontName} </Name>
      <span>Votes: {props.votes}</span>
    </FontElement>
  );
};

const Align = styled.div`
  text-align: center;
`;

// Displays the list over most popular fonts
const FontList = (props) => {
  const [fontList, setFontList] = useState([{ "font-name": "No elements" }]);

  useEffect(() => {
    axios
      .get(apiUri + "/list")
      .then((res) => {
        setFontList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fontList]);
  const sortedItems = fontList.sort((a, b) => b.votes - a.votes);

  const listItems = sortedItems.map((el) => (
    <Element key={`${el.id}`} fontName={el["font-name"]} votes={el.votes} />
  ));

  return (
    <Align>
      <h1>Fonts by popularity</h1>
      <List>{listItems}</List>
    </Align>
  );
};

export default FontList;
