import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FontDisplay from "./FontDisplay.js";
import apiUri from "../api.js";

const DisplayBox = styled.div`
  background: transparent;
  padding: 1rem;
  position: relative;
  width: 50%;
  height: 100%;
  margin: auto;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: 600px;
`;

// Vote on one of two fonts
const FontSelector = (props) => {
  const [fonts, setFonts] = useState([
    { "font-name": "Dummy 1" },
    { "font-name": "Dummy 2" },
  ]);

  useEffect(() => {
    axios
      .get(apiUri + "/vote/create")
      .then((res) => {
        console.log(res);
        setFonts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <DisplayBox className="FontSelector">
      <h2>Vote on your favourite font</h2>
      <Container>
        <FontDisplay
          fontName={fonts[0]["font-name"]}
          fontId={fonts[0].id}
          exampleText={props.exampleText}
        />
        <FontDisplay
          fontName={fonts[1]["font-name"]}
          fontId={fonts[1].id}
          exampleText={props.exampleText}
        />
      </Container>
    </DisplayBox>
  );
};

export default FontSelector;
