import React, { Component, useState } from 'react';
import background from "./img/Initial Config Screen.png";
import styled from "styled-components";
import {Routes, Route, useNavigate} from 'react-router-dom';


class App extends Component {
  render() {
    const myStyle={
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    };

    const theme = {
      blue: {
        default: "#FDBF57",
        hover: "#283593"
      }
    };
    
    const navigate = useNavigate();
    const navigateToGame = () => {
        // 👇️ navigate to /contacts
        navigate('/GameScreen');
      };

    
    
    const Button = styled.button`
      background-color: ${(props) => theme[props.theme].default};
      font-family: 'Bungee';
      font-style: normal;
      font-weight: 400;
      font-size: 59px;
      text-align: center;
      color: #FFFFFF;
      padding: 20px 20px;
      border-radius: 20px;
      outline: 0;
      stroke: #4E3EB8;
      text-transform: uppercase;
      margin: 10px 258px;
      cursor: pointer;
      transition: ease background-color 250ms;
      &:hover {
        background-color: ${(props) => theme[props.theme].hover};
      }
      &:disabled {
        cursor: default;
        opacity: 0.7;
      }
    `;
    
    Button.defaultProps = {
      theme: "blue"
    };
    
    function clickMe() {
      alert("You clicked me!");
    }
    
    return (
      <div style={myStyle}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150vh',
      }}>
          <Button onClick={clickMe}>Start</Button>
        </div>
        
      </div>

    );
  }
}
   
export default App;